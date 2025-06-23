import React from "react";
import {
  Container,
  Stack,
  Box,
  Typography,
  Card,
  CardContent,
  Paper,
} from "@mui/material";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Complete project documentation",
      description:
        "Review and finalize all project documentation before submission",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Team meeting",
      description: "Weekly team sync-up at 3 PM",
      status: "pending",
    },
    {
      id: 3,
      title: "Code review",
      description: "Review PR #1234",
      status: "completed",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Task Manager
        </Typography>

        <Card sx={{ p: 3 }}>
          <CardContent>
            <Stack spacing={2}>
              {tasks.map((task) => (
                <Paper
                  key={task.id}
                  elevation={1}
                  sx={{
                    p: 2,
                    mb: 2,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {task.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {task.description}
                  </Typography>
                  <Box
                    sx={{ mt: 1, display: "flex", justifyContent: "flex-end" }}
                  >
                    <Typography
                      variant="caption"
                      color={
                        task.status === "completed"
                          ? "success.main"
                          : task.status === "in-progress"
                          ? "warning.main"
                          : "error.main"
                      }
                    >
                      {task.status}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default App;
