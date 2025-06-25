import { useState, useEffect } from 'react'
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Container, 
  Grid, 
  Stack, 
  TextField, 
  Typography, 
  CircularProgress, 
  Alert 
} from '@mui/material'
import { Search as SearchIcon, Refresh as RefreshIcon } from '@mui/icons-material'
import SearchBar from './components/SearchBar'
import SortButtons from './components/SortButtons'
import Loading from './components/Loading'
import Error from './components/Error'
import UserCard from './components/UserCard'

function App() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setData(result)
        setFilteredData(result)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const filtered = data.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredData(filtered)
  }, [searchTerm, data])

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error error={error} onRetry={() => window.location.reload()} />
  }

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy].localeCompare(b[sortBy])
    } else {
      return b[sortBy].localeCompare(a[sortBy])
    }
  })

  return (
    <Container maxWidth="lg">
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              flexGrow: 2, 
              textAlign: 'left',
              minWidth: '200px'
            }}
          >
            User Directory
          </Typography>
          <SearchBar searchTerm={searchTerm} onSearch={(e) => setSearchTerm(e.target.value)} />
        </Stack>

        <Box sx={{ mb: 3 }}>
          <SortButtons 
            sortBy={sortBy} 
            sortOrder={sortOrder} 
            onSort={(field) => handleSort(field)} 
          />
        </Box>

        <Grid container spacing={3}>
          {sortedData.map(user => (
            <Grid
              key={user.id}
              xs={12}
              sm={6}
              md={4}
            >
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>

        {sortedData.length === 0 && (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '200px', 
            p: 3 
          }}>
            <Typography variant="body2" color="text.secondary">
              No results found for "{searchTerm}"
            </Typography>
          </Box>
        )}
      </Stack>
    </Container>
  )
}

export default App
