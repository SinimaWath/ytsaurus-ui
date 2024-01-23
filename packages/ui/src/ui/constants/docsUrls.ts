import {getDocsBaseUrl} from '../config';

const baseUrl = getDocsBaseUrl() || '';

export const docsUrls = {
    'bundle-controller:reserved-memory': ``,
    'cypress:ttl': `${baseUrl}/user-guide/storage/cypress#TTL`,
    'storage:compression': `${baseUrl}/user-guide/storage/compression`,
    'operations:recommendations#slishkom-melkie-chanki': `${baseUrl}/user-guide/data-processing/operations/recommendations#slishkom-melkie-chanki`,
    'scheduler:integral_guarantees': `${baseUrl}/user-guide/data-processing/scheduler/integral-guarantees`,
    'overview:quickstart': `${baseUrl}/overview/try-yt`,
    'faq:enablepathautocorrection': `${baseUrl}/faq/faq#enablepathautocorrection`,
    'storage:static_tables': `${baseUrl}/user-guide/storage/static-tables`,
    'dynamic-tables:overview': `${baseUrl}/user-guide/dynamic-tables/overview`,
    'dynamic-tables:cross-dc': `${baseUrl}/user-guide/dynamic-tables/dynamic-tables-resources#georaspredelyonnye-klastery-cross-dc`,
    'storage:compression#compression_codecs': `${baseUrl}/user-guide/storage/compression#compression_codecs`,
    'storage:replication#replication': `${baseUrl}/user-guide/storage/replication#replication`,
    'storage:replication#erasure': `${baseUrl}/user-guide/storage/replication#erasure`,
    'storage:static_schema': `${baseUrl}/user-guide/storage/static-schema`,
    'storage:data_types#schema': `${baseUrl}/user-guide/storage/data-types#schema`,
    'storage:data_types#schema_optional': `${baseUrl}/user-guide/storage/data-types#schema_optional`,
    'storage:static_schema#overview': `${baseUrl}/user-guide/storage/static-schema`,
    'dynamic-tables:transactions#conflicts': `${baseUrl}/user-guide/dynamic-tables/transactions#conflicts`,
    'dynamic-tables:sorted_dynamic_tables#aggr_columns': `${baseUrl}/user-guide/dynamic-tables/sorted-dynamic-tables#aggr_columns`,
    'problems:jobstatistics': `${baseUrl}/user-guide/problems/jobstatistics`,
    'storage:formats': `${baseUrl}/user-guide/storage/formats`,
    'storage:excel#skachivanie': `${baseUrl}/user-guide/storage/excel#skachivanie`,
    'storage:excel': `${baseUrl}/user-guide/storage/excel`,
    'faq:web_interface_table_download': `${baseUrl}/faq/faq#web_interface_table_download`,
    'dynamic-tables:overview#in_memory': `${baseUrl}/user-guide/dynamic-tables/overview#in_memory`,
    'storage:chunks#optimize_for': `${baseUrl}/user-guide/storage/chunks#optimize_for`,
    'storage:accounts': `${baseUrl}/user-guide/storage/accounts`,
    'storage:media#primary': `${baseUrl}/user-guide/storage/media#primary`,
    'dynamic-tables:concepts#tablet_cell_bundles': `${baseUrl}/user-guide/dynamic-tables/concepts#tablet_cell_bundles`,
    'operations:operations_options#obshie-opcii-dlya-vseh-tipov-operacij': `${baseUrl}/user-guide/data-processing/operations/operations-options#common_options`,
    'operations:erase': `${baseUrl}/user-guide/data-processing/operations/erase`,
    'operations:merge': `${baseUrl}/user-guide/data-processing/operations/merge`,
    'operations:overview#aborted_jobs': `${baseUrl}/user-guide/data-processing/operations/overview#aborted_jobs`,
    'operations:overview#completed_jobs': `${baseUrl}/user-guide/data-processing/operations/overview#completed_jobs`,
    'operations:operations_options': `${baseUrl}/user-guide/data-processing/operations/operations-options`,
    'operations:remote_copy': `${baseUrl}/user-guide/data-processing/operations/remote-copy`,
    'scheduler:scheduler_and_pools': `${baseUrl}/user-guide/data-processing/scheduler/scheduler-and-pools`,
    'faq:alert_type': `${baseUrl}/faq/faq#`,
    'common:quotas#request_quota': '',
    'common:quota_request': '',
    'api:cli': `${baseUrl}/api/cli/cli`,
    'chyt:yt_tables#dynamic': `${baseUrl}/user-guide/data-processing/chyt/yt-tables#dynamic`,
    'common:regular_system_processes': '',
    'acl:permissions': `${baseUrl}/user-guide/storage/access-control#authorization`,
};

export type DocsUrls = typeof docsUrls;
