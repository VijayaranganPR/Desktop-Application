console.groupCollapsed("Group 1");
console.log("This is the first log message in Group 1.");
console.groupCollapsed("Group 2");
console.log("This is the first log message in Group 2.");
console.log("This is the second log message in Group 2.");
console.groupEnd();
console.log("This is the second log message in Group 1.");
console.groupEnd();

/*
Group 1
  This is the first log message in Group 1.
  Group 2
    This is the first log message in Group 2.
    This is the second log message in Group 2.
  This is the second log message in Group 1.
*/