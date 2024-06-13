import * as yup from 'yup'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Box, Grid, Typography, styled } from '@mui/material'
import CampaignFilter from './CampaignFilter'
import Layout from '../layout/Layout'
import CampaignsSearch from './CampaignsSearch'
import GenericForm from '../../common/form/GenericForm'
import SelectDate from './custom/SelectDate'

const PREFIX = 'CampaignsSearchFilter'

const classes = {
  title: `${PREFIX}-title`,
  subheading: `${PREFIX}-subheading`,
  support: `${PREFIX}-support`,
  applyButton: `${PREFIX}-applyButton`,
  arrowIcon: `${PREFIX}-arrowIcon`,
}

const Root = styled(Layout)(({ theme }) => ({
  [theme.breakpoints.up(2000)]: {
    maxWidth: theme.spacing(165),
    paddingTop: theme.spacing(4),
  },

  [`& .${classes.title}`]: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(6),
    fontWeight: '500',
    color: '#2196F3',
    fontStyle: 'normal',
    fontSize: theme.typography.pxToRem(45),
    lineHeight: '45px',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '-1.5px',
  },

  [`& .${classes.subheading}`]: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: theme.typography.pxToRem(16),
    lineHeight: '175 %',
    textAlign: 'center',
    letterSpacing: '0.15px',
  },

  [`& .${classes.support}`]: {
    marginBottom: theme.spacing(3),
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: theme.typography.pxToRem(25),
    lineHeight: '120%',
    textAlign: 'center',
    color: '#2196F3',
    letterSpacing: '-0.5px',
  },

  [`& .${classes.applyButton}`]: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1.5, 6),
    margin: theme.spacing(5, 0),
  },

  [`& .${classes.arrowIcon}`]: {
    fontSize: theme.typography.pxToRem(48),
  },
}))

const initialValues = {
  targetDate: '',
}

export default function CampaignsSearchAndFilter() {
  const { t } = useTranslation()
  const [searchKeyword, setSearchKeyword] = useState('')
  const campaignsData = useMemo(() => {
    //TODO: handle search by keyword
  }, [])
  const validationSchema = yup.object().shape({
    targetDate: yup.date(),
  })
  const handleSubmit = useCallback(() => {
    //TODO: handle filter by date
  }, [])

  return (
    <Root maxWidth={false}>
      <CampaignsSearch onChange={setSearchKeyword} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          mb: 3,
        }}>
        <GenericForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}>
          <Box>
            <SelectDate name="targetDate" />
          </Box>
        </GenericForm>
      </Box>
      <Grid>
        <Typography variant="h1" component="h1" className={classes.title}>
          {t('campaigns:campaigns')}
        </Typography>
        <Typography variant="h6" component="h2" className={classes.support}>
          {t('campaigns:cta.support-cause-today')}
        </Typography>
        <CampaignFilter />
      </Grid>
    </Root>
  )
}
