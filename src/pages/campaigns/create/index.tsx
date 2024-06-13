import { GetServerSideProps } from 'next'
import CampaignsSearchAndFilter from 'components/client/campaigns/CampaignsSearchAndFilter'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { campaignsOrderQueryFunction } from 'common/hooks/campaigns'
import { CampaignResponse } from 'gql/campaigns'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { endpoints } from 'service/apiEndpoints'
import { prefetchCampaignTypesList } from 'service/campaignTypes'

export const getServerSideProps: GetServerSideProps = async (params) => {
  const client = new QueryClient()
  const result = await Promise.allSettled([
    await client.prefetchQuery<CampaignResponse[]>(
      [endpoints.campaign.listCampaigns.url],
      campaignsOrderQueryFunction,
    ),
    prefetchCampaignTypesList(client),
    await serverSideTranslations(params.locale ?? 'bg', [
      'common',
      'auth',
      'validation',
      'campaigns',
    ]),
  ])
  const ssrTranslations = result[2].status === 'fulfilled' ? result[2].value : null
  return {
    props: {
      ...ssrTranslations,
      dehydratedState: dehydrate(client),
    },
  }
}

export default CampaignsSearchAndFilter
