// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
chrome.devtools.panels.create("Boilerplate", "rally-icon-40.png", "panels/panel.html", function(panel) {});
chrome.devtools.panels.create("Client Metrics", "rally-icon-40.png", "panels/clientmetrics.html", function(panel) {});