import { Container, Typography, Box, Chip, Grid } from "@mui/material";
import React from "react";

export default function About() {
  const skills = [
    "Docker",
    "Grafana",
    "Prometheus",
    "Tempo",
    "Loki",
    "OpenTelemetry",
    "Azure",
    "JavaScript/Typescript",
    "C#/.NET",
    "React.js",
    "Angular",
    "SQL Server",
    "REST APIs",
    "Bash Scripting",
    "Git",
    "Kafka",
  ];

  return (
    <Container sx={{ flexGrow: 1, py: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        About Me
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Professional Summary
        </Typography>
        <Typography paragraph>
          Experienced Production Support Engineer with a strong background in
          system reliability, observability platforms, and proactive
          infrastructure monitoring. Proven track record of implementing modern
          logging and monitoring solutions using industry-standard tools.
          Skilled in full-stack development, database management, and creating
          scalable technical solutions that prevent incidents before they occur.
          Expert in troubleshooting complex distributed microservices
          architectures and implementing comprehensive monitoring strategies.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Key Achievements
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Observability Platform Implementation
          </Typography>
          <Typography paragraph>
            • Designed and implemented comprehensive observability platform
            using Docker, Grafana, Tempo, and Prometheus, revolutionizing system
            monitoring capabilities
          </Typography>
          <Typography paragraph>
            • Migrated from manual log access to automated log aggregation using
            Loki with S3 storage, dramatically improving operational efficiency
          </Typography>
          <Typography paragraph>
            • Implemented OpenTelemetry standards across .NET services,
            establishing foundation for distributed tracing and improved
            debugging capabilities
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            System Reliability & Monitoring
          </Typography>
          <Typography paragraph>
            • Built self-monitoring system with automated health checks and
            alert notifications for Docker container status
          </Typography>
          <Typography paragraph>
            • Reduced incident response time by providing centralized logging
            and real-time system visibility
          </Typography>
          <Typography paragraph>
            • Currently expanding platform to additional services, demonstrating
            scalability and adoption success
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Professional Experience & Responsibilities
        </Typography>
        <Typography paragraph>
          • Monitor and maintain production system health and performance across
          distributed microservices architecture
        </Typography>
        <Typography paragraph>
          • Troubleshoot complex technical issues using systematic methodology
          with focus on root cause analysis
        </Typography>
        <Typography paragraph>
          • Collaborate cross-functionally with development, operations, and
          business teams to resolve production issues
        </Typography>
        <Typography paragraph>
          • Design and maintain alert systems for proactive issue detection and
          create operational runbooks with clear technical documentation
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Technical Skills
        </Typography>
        <Grid container spacing={1}>
          {skills.map((skill) => (
            <Grid item key={skill}>
              <Chip label={skill} variant="outlined" />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Infrastructure & DevOps:</strong> Docker, Azure App
            Services, S3, VM Management, Container Orchestration
            <br />
            <strong>Programming Languages:</strong> JavaScript, SQL, C#/.NET,
            Bash Scripting
            <br />
            <strong>Databases:</strong> SQL Server, Database Query Optimization,
            Performance Tuning
            <br />
            <strong>Web Technologies:</strong> React.js, Angular, REST APIs,
            HTML/CSS
            <br />
            <strong>Monitoring & Observability:</strong> Grafana, Prometheus,
            Tempo, Loki, OpenTelemetry, Log Aggregation, Distributed Tracing,
            Alert Systems, Performance Monitoring
            <br />
            <strong>Cloud Platforms:</strong> Azure, Cloud Infrastructure
            Management
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
