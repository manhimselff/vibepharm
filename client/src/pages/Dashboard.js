import React from 'react';
import { Box, Grid, Paper, Typography, IconButton, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Timeline,
  TrendingUp,
  Inventory,
  Warning,
  MonetizationOn,
  People,
  LocalPharmacy
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 15,
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const StatCard = ({ icon: Icon, title, value, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <StyledPaper elevation={3} sx={{ bgcolor: color }}>
      <Box sx={{ color: 'white', display: 'flex', alignItems: 'center', mb: 2 }}>
        <Icon sx={{ fontSize: 40, mr: 2 }} />
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
        {value}
      </Typography>
    </StyledPaper>
  </motion.div>
);

// Sample data for the chart
const salesData = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 5000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

function Dashboard() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          Dashboard Overview
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={MonetizationOn}
              title="Total Sales"
              value="$12,543"
              color="#2196f3"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={Inventory}
              title="Items in Stock"
              value="847"
              color="#4caf50"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={Warning}
              title="Low Stock Items"
              value="12"
              color="#ff9800"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={People}
              title="Total Customers"
              value="1,234"
              color="#e91e63"
            />
          </Grid>

          {/* Sales Chart */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StyledPaper elevation={3}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Weekly Sales Overview
                </Typography>
                <Box sx={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sales" fill="#2196f3" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </StyledPaper>
            </motion.div>
          </Grid>

          {/* Recent Activity */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <StyledPaper elevation={3}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Recent Activity
                </Typography>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <IconButton size="small" sx={{ bgcolor: '#e3f2fd', mr: 2 }}>
                      <Timeline />
                    </IconButton>
                    <Box>
                      <Typography variant="subtitle2">New sale recorded</Typography>
                      <Typography variant="caption" color="textSecondary">
                        Just now
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <IconButton size="small" sx={{ bgcolor: '#e8f5e9', mr: 2 }}>
                      <LocalPharmacy />
                    </IconButton>
                    <Box>
                      <Typography variant="subtitle2">Inventory updated</Typography>
                      <Typography variant="caption" color="textSecondary">
                        2 hours ago
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size="small" sx={{ bgcolor: '#fff3e0', mr: 2 }}>
                      <TrendingUp />
                    </IconButton>
                    <Box>
                      <Typography variant="subtitle2">Monthly report generated</Typography>
                      <Typography variant="caption" color="textSecondary">
                        5 hours ago
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </StyledPaper>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default Dashboard;