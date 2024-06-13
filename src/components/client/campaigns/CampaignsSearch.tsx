import React from 'react'
import { Box, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useTranslation } from 'next-i18next'

type Props = {
  onChange: (newValue: string) => void
}

const CampaignsSearch = ({ onChange }: Props) => {
  const { t } = useTranslation('campaigns')

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        mb: 3,
      }}>
      <TextField
        id="campaigns-search-field"
        onChange={(event) => onChange(event.target.value)}
        placeholder={t('filters.searchKeyword.placeholder')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: 2 / 3,
            md: 1 / 2,
          },
        }}
      />
    </Box>
  )
}

export default CampaignsSearch
