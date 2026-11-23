export type InstallCounts = {
  marketplaceInstalls: number;
  openVsxDownloads: number;
  total: number;
};

/** Last confirmed counts, 2026-11-23. Used when a registry is unreachable during the static build. */
const FALLBACK: InstallCounts = {
  marketplaceInstalls: 1461,
  openVsxDownloads: 11652,
  total: 1461 + 11652,
};

const format = new Intl.NumberFormat('en-US');

export function formatCount(value: number) {
  return format.format(value);
}

/**
 * Marketplace publishes `install`. Open VSX publishes `downloadCount` only.
 * The page adds them and names each source so the two metrics stay distinct.
 */
export async function getInstallCounts(): Promise<InstallCounts> {
  const [marketplaceInstalls, openVsxDownloads] = await Promise.all([
    fetchMarketplaceInstalls(),
    fetchOpenVsxDownloads(),
  ]);

  return {
    marketplaceInstalls,
    openVsxDownloads,
    total: marketplaceInstalls + openVsxDownloads,
  };
}

async function fetchMarketplaceInstalls() {
  try {
    const response = await fetch(
      'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json;api-version=3.0-preview.1',
        },
        body: JSON.stringify({
          filters: [{ criteria: [{ filterType: 7, value: 'duclvz.acp-pro' }] }],
          flags: 914,
        }),
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!response.ok) throw new Error(`Marketplace responded ${response.status}`);
    const body = (await response.json()) as {
      results?: Array<{
        extensions?: Array<{
          statistics?: Array<{ statisticName?: string; value?: number }>;
        }>;
      }>;
    };
    const install = body.results?.[0]?.extensions?.[0]?.statistics?.find(
      (stat) => stat.statisticName === 'install',
    )?.value;
    if (!Number.isFinite(install) || install! < 0) throw new Error('Marketplace install count missing');
    return Math.round(install!);
  } catch (error) {
    console.warn('Marketplace install count unavailable; using the last confirmed count.', error);
    return FALLBACK.marketplaceInstalls;
  }
}

async function fetchOpenVsxDownloads() {
  try {
    const response = await fetch('https://open-vsx.org/api/duclvz/acp-pro', {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Open VSX responded ${response.status}`);
    const body = (await response.json()) as { downloadCount?: number };
    if (!Number.isFinite(body.downloadCount) || body.downloadCount! < 0) {
      throw new Error('Open VSX download count missing');
    }
    return Math.round(body.downloadCount!);
  } catch (error) {
    console.warn('Open VSX download count unavailable; using the last confirmed count.', error);
    return FALLBACK.openVsxDownloads;
  }
}
