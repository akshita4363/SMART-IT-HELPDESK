// ============================================================
// CLIENT SCRIPT 1 — Alert for High / Critical Priority
// ============================================================
// Table    : Incident
// Type     : onChange
// Field    : Priority
// Purpose  : Shows an immediate alert popup when agent
//            selects High or Critical priority.
//            Warns them to fill all details carefully.
// ============================================================

function onChange(control, oldValue, newValue, isLoading) {

    // Don't run on page load
    if (isLoading || newValue === '') {
        return;
    }

    // When Priority = 2 (High)
    if (newValue === '2') {
        alert('⚠️ High Priority Ticket!\nPlease fill all details carefully.');
    }

    // When Priority = 1 (Critical)
    else if (newValue === '1') {
        alert('🚨 Critical Priority Ticket!\nImmediate attention required!\nPlease escalate to senior agent if needed.');
    }
}


// ============================================================
// CLIENT SCRIPT 2 — Auto Fill Category
// ============================================================
// Table    : Incident
// Type     : onChange
// Field    : Category
// Purpose  : When user selects "Laptop" as a sub-category,
//            it automatically sets the main Category
//            to "Hardware" and shows an info message.
//            Saves time and reduces manual errors.
// ============================================================

function onChange(control, oldValue, newValue, isLoading) {

    // Don't run on page load
    if (isLoading || newValue === '') {
        return;
    }

    // When Category = Laptop, auto set to Hardware
    if (newValue === 'laptop') {
        g_form.setValue('category', 'hardware');
        g_form.addInfoMessage('ℹ️ Category has been automatically set to Hardware for Laptop issues.');
    }

    // When Category = Printer, auto set to Hardware
    else if (newValue === 'printer') {
        g_form.setValue('category', 'hardware');
        g_form.addInfoMessage('ℹ️ Category has been automatically set to Hardware for Printer issues.');
    }

    // When Category = Email, auto set to Software
    else if (newValue === 'email') {
        g_form.setValue('category', 'software');
        g_form.addInfoMessage('ℹ️ Category has been automatically set to Software for Email issues.');
    }
}
