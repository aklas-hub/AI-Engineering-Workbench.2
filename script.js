/****************************************************
 * AI ENGINEERING WORKBENCH
 * Morgan Stanley Interview Demo System
 ****************************************************/

/* =========================
   GLOBAL STATE
========================= */

const AppState = {
    metrics: {
        cpu: 32,
        memory: 48,
        latency: 12,
        pps: 1200
    },
    logs: [],
    lastAction: null
};

/* =========================
   INITIALIZATION
========================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeDashboard();
    initializeModules();
    startMetricSimulation();
});

/* =========================
   DASHBOARD METRICS
========================= */

function initializeDashboard() {
    updateMetricsUI();
}

function startMetricSimulation() {
    setInterval(() => {
        AppState.metrics.cpu = randomFluctuation(AppState.metrics.cpu, 10, 90);
        AppState.metrics.memory = randomFluctuation(AppState.metrics.memory, 20, 95);
        AppState.metrics.latency = randomFluctuation(AppState.metrics.latency, 5, 80);
        AppState.metrics.pps = randomFluctuation(AppState.metrics.pps, 800, 5000);

        updateMetricsUI();
    }, 2000);
}

function randomFluctuation(value, min, max) {
    const change = (Math.random() - 0.5) * 10;
    let newValue = value + change;
    return Math.max(min, Math.min(max, Math.round(newValue)));
}

function updateMetricsUI() {
    setText("cpu", AppState.metrics.cpu + "%");
    setText("memory", AppState.metrics.memory + "%");
    setText("latency", AppState.metrics.latency + " ms");
    setText("pps", AppState.metrics.pps);
}

/* =========================
   MODULE INITIALIZATION
========================= */

function initializeModules() {
    bindButton("reqBtn", handleRequirementAssistant);
    bindButton("archBtn", handleArchitectureGenerator);
    bindButton("cppBtn", handleCppGenerator);
    bindButton("testBtn", handleTestGenerator);
    bindButton("deployBtn", handleDeploymentAssistant);
    bindButton("logBtn", handleLogAnalyzer);
}

/* =========================
   AI REQUIREMENT ASSISTANT
========================= */

function handleRequirementAssistant() {
    const input = getValue("reqInput");

    if (!validateInput(input)) return;

    const output = `
📌 Requirement Analysis

• Business Need: ${input}
• Classification: Trading / Exchange / Risk System
• Complexity: High (Latency Sensitive)
• Suggested Breakdown:
  - Data ingestion layer
  - Validation rules engine
  - Event-driven processing
  - Audit logging

• Morgan Stanley Mapping:
  - Aligns with Front Office Trading Systems
  - Requires low-latency design
  - High availability architecture needed
`;

    setOutput("output", output);
    logAction("Requirement Assistant executed");
}

/* =========================
   AI ARCHITECTURE GENERATOR
========================= */

function handleArchitectureGenerator() {
    const input = getValue("archInput");

    if (!validateInput(input)) return;

    const output = `
🏗 System Architecture Design

Use Case: ${input}

Architecture Blueprint:

[Client Layer]
   ↓
[API Gateway]
   ↓
[Microservices Layer]
   ├── Order Service
   ├── Pricing Engine
   ├── Risk Engine
   ↓
[Messaging Bus (Kafka)]
   ↓
[Data Layer]
   ├── In-Memory Cache (Redis)
   ├── Time-Series DB
   ├── Persistent Storage

Key Design Principles:
• Low Latency (< 10ms target)
• Horizontal Scalability
• Fault Tolerance
• Event-Driven Processing

Morgan Stanley Alignment:
✔ Trading systems architecture
✔ High-frequency data handling
✔ Distributed microservices
`;

    setOutput("output", output);
    logAction("Architecture Generator executed");
}

/* =========================
   AI C++ CODE GENERATOR
========================= */

function handleCppGenerator() {
    const input = getValue("cppInput");

    if (!validateInput(input)) return;

    const output = `
💻 Generated C++ Trading Module

// ${input}

#include <iostream>
#include <vector>

class OrderEngine {
public:
    void processOrder(const std::string& order) {
        std::cout << "Processing order: " << order << std::endl;
    }

    double calculateRisk(double exposure) {
        return exposure * 0.02;
    }
};

int main() {
    OrderEngine engine;
    engine.processOrder("BUY 100 AAPL");
    std::cout << "Risk: " << engine.calculateRisk(50000) << std::endl;
    return 0;
}

Morgan Stanley Mapping:
✔ Low-latency execution logic
✔ Risk calculation module
✔ Market order processing
`;

    setOutput("output", output);
    logAction("C++ Generator executed");
}

/* =========================
   AI TEST GENERATOR
========================= */

function handleTestGenerator() {
    const input = getValue("testInput");

    if (!validateInput(input)) return;

    const output = `
🧪 Test Strategy Generator

Target System: ${input}

Test Plan:

1. Unit Tests
   - Order validation
   - Risk computation
   - API response checks

2. Integration Tests
   - Service communication
   - Message queue validation

3. Performance Tests
   - Load testing (10k TPS)
   - Latency benchmarking

4. Edge Cases
   - Market crash scenarios
   - Data spike handling

Morgan Stanley Mapping:
✔ High-frequency trading validation
✔ System resilience testing
✔ Production readiness assurance
`;

    setOutput("output", output);
    logAction("Test Generator executed");
}

/* =========================
   DEPLOYMENT ASSISTANT
========================= */

function handleDeploymentAssistant() {
    const input = getValue("deployInput");

    if (!validateInput(input)) return;

    const output = `
🚀 Deployment Strategy

System: ${input}

Pipeline:
[Code Commit]
   ↓
[CI/CD Pipeline]
   ↓
[Build & Unit Tests]
   ↓
[Containerization (Docker)]
   ↓
[Staging Environment]
   ↓
[Performance Validation]
   ↓
[Production Deployment]

Infrastructure:
• Kubernetes Cluster
• Auto-scaling enabled
• Canary Deployments
• Blue-Green Strategy

Morgan Stanley Mapping:
✔ Enterprise-grade deployment
✔ Financial system reliability
✔ Zero-downtime releases
`;

    setOutput("output", output);
    logAction("Deployment Assistant executed");
}

/* =========================
   LOG ANALYZER
========================= */

function handleLogAnalyzer() {
    const input = getValue("logInput");

    if (!validateInput(input)) return;

    const output = `
📊 Production Log Analysis

Log Source: ${input}

Insights:
• Spike detected in latency at 14:02 UTC
• Memory usage increased by 18%
• 2 microservice timeouts detected
• No critical system failure

Root Cause Hypothesis:
→ Market data burst overload

Recommendation:
• Increase thread pool size
• Add request throttling
• Optimize serialization layer

Morgan Stanley Mapping:
✔ Production observability
✔ Trading system diagnostics
✔ Real-time monitoring
`;

    setOutput("output", output);
    logAction("Log Analyzer executed");
}

/* =========================
   WORKFLOW ORCHESTRATOR (SIMPLIFIED)
========================= */

function runWorkflow(input) {
    if (!validateInput(input)) return;

    handleRequirementAssistant();
    handleArchitectureGenerator();
    handleCppGenerator();

    logAction("Workflow Orchestrator executed full pipeline");
}

/* =========================
   VALIDATION ENGINE
========================= */

function validateInput(input) {
    if (!input || input.trim().length < 3) {
        setOutput("output", "⚠ Invalid input: Please enter meaningful text.");
        return false;
    }
    return true;
}

/* =========================
   HELPERS
========================= */

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
}

function getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
}

function setOutput(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
}

function bindButton(id, handler) {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", handler);
}

function logAction(action) {
    AppState.logs.push({
        action,
        timestamp: new Date().toISOString()
    });

    AppState.lastAction = action;
    console.log("[AI WORKBENCH]", action);
}

/* =========================
   ERROR HANDLING
========================= */

window.onerror = function (msg, url, line) {
    console.error("System Error:", msg, "Line:", line);
    setOutput("output", "⚠ System error occurred. Check console logs.");
};