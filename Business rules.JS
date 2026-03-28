// ============================================================
// BUSINESS RULE 1 — Auto Assign Network Incidents
// ============================================================
// Table    : Incident
// When     : Before Insert and Update
// Condition: Category = Network
// Purpose  : Automatically assigns any Network incident
//            to the IT agent (mike.agent)
// ============================================================

(function executeRule(current, previous /*null when async*/) {

    // Check if the category is Network
    if (current.category == 'network') {

        // Find the user with user_id = mike.agent
        var agentLookup = new GlideRecord('sys_user');
        agentLookup.addQuery('user_name', 'mike.agent');
        agentLookup.query();

        if (agentLookup.next()) {
            // Assign the ticket to Mike Agent
            current.assigned_to = agentLookup.sys_id;
            gs.log('Network incident auto-assigned to Mike Agent', 'SmartHelpdesk');
        }
    }

})(current, previous);


// ============================================================
// BUSINESS RULE 2 — Set Default Priority
// ============================================================
// Table    : Incident
// When     : Before Insert only
// Condition: Priority is empty
// Purpose  : Ensures no ticket is saved without a priority.
//            Sets default priority to 3 (Moderate)
// ============================================================

(function executeRule(current, previous /*null when async*/) {

    // Check if priority field is empty
    if (current.priority.nil()) {

        // Set default priority to 3 = Moderate
        current.priority = 3;
        gs.log('Default priority set to Moderate for new incident', 'SmartHelpdesk');
    }

})(current, previous);


// ============================================================
// BUSINESS RULE 3 — Keyword Based Priority Escalation (BONUS)
// ============================================================
// Table    : Incident
// When     : Before Insert and Update
// Condition: Always (runs on every save)
// Purpose  : Reads the Description field and detects urgency
//            keywords to automatically escalate priority.
//            Makes the system intelligent!
//
// Keywords → Critical : urgent, critical, immediately, asap
// Keywords → High     : high, important, severe
// ============================================================

(function executeRule(current, previous /*null when async*/) {

    // Get description text and convert to lowercase
    var desc = current.description.toString().toLowerCase();

    // Check for Critical keywords
    if (desc.indexOf('urgent') !== -1 ||
        desc.indexOf('critical') !== -1 ||
        desc.indexOf('immediately') !== -1 ||
        desc.indexOf('asap') !== -1) {

        current.priority = 1; // 1 = Critical
        gs.log('Priority escalated to CRITICAL based on keywords in description', 'SmartHelpdesk');

    }
    // Check for High keywords
    else if (desc.indexOf('high') !== -1 ||
             desc.indexOf('important') !== -1 ||
             desc.indexOf('severe') !== -1) {

        current.priority = 2; // 2 = High
        gs.log('Priority escalated to HIGH based on keywords in description', 'SmartHelpdesk');
    }

})(current, previous);
