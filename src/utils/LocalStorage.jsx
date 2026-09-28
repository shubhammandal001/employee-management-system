// employee data
//localStorage.clear()

const employee = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",

    taskNumber: 5,

    taskSummary: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create the initial design for the company homepage.",
        taskDate: "2026-09-27",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update User Profile",
        taskDescription: "Add profile editing functionality for users.",
        taskDate: "2026-09-28",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription: "Prepare wireframes for the new dashboard.",
        taskDate: "2026-09-25",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Login Bug",
        taskDescription: "Investigate and fix the login authentication issue.",
        taskDate: "2026-09-24",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Documentation",
        taskDescription: "Write documentation for the newly added features.",
        taskDate: "2026-09-30",
        category: "Documentation"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",

    taskNumber: 5,

    taskSummary: {
      active: 3,
      newTask: 1,
      completed: 2,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription: "Develop the main dashboard for the application.",
        taskDate: "2026-09-27",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect the frontend dashboard with the backend API.",
        taskDate: "2026-09-29",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Create and configure the required database tables.",
        taskDate: "2026-09-23",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the latest code changes submitted by the team.",
        taskDate: "2026-09-26",
        category: "Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Perform functional testing on the dashboard.",
        taskDate: "2026-10-01",
        category: "Testing"
      }
    ]
  },

  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",

    taskNumber: 5,

    taskSummary: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Plan",
        taskDescription: "Prepare a marketing strategy for the upcoming product launch.",
        taskDate: "2026-09-28",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Social Media Posts",
        taskDescription: "Create promotional content for social media platforms.",
        taskDate: "2026-09-29",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Research competitors and current market trends.",
        taskDate: "2026-09-22",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Campaign",
        taskDescription: "Prepare and send the monthly promotional email campaign.",
        taskDate: "2026-09-25",
        category: "Marketing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Product Presentation",
        taskDescription: "Create a presentation for the new product.",
        taskDate: "2026-10-02",
        category: "Presentation"
      }
    ]
  },

  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",

    taskNumber: 5,

    taskSummary: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Blog Article",
        taskDescription: "Write a detailed article about the company's latest product.",
        taskDate: "2026-09-27",
        category: "Content"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Website Content",
        taskDescription: "Update outdated information across the company website.",
        taskDate: "2026-09-30",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Proofread Articles",
        taskDescription: "Review and correct grammar and spelling errors.",
        taskDate: "2026-09-24",
        category: "Editing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Newsletter",
        taskDescription: "Prepare the weekly company newsletter.",
        taskDate: "2026-09-26",
        category: "Content"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Optimize website content for search engines.",
        taskDate: "2026-10-03",
        category: "SEO"
      }
    ]
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",

    taskNumber: 5,

    taskSummary: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Application",
        taskDescription: "Perform complete testing of the latest application build.",
        taskDate: "2026-09-27",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Report Bugs",
        taskDescription: "Document bugs found during application testing.",
        taskDate: "2026-09-28",
        category: "Bug Tracking"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Regression Testing",
        taskDescription: "Verify that recent changes did not break existing features.",
        taskDate: "2026-09-25",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription: "Test the application's performance under heavy usage.",
        taskDate: "2026-09-23",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Test Report",
        taskDescription: "Create a report containing all testing results.",
        taskDate: "2026-10-01",
        category: "Reporting"
      }
    ]
  }
];


// admin data

const admin = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "admin@example.com",
    password: "123"
  }
];



export const setLocalStorage=()=>{
    localStorage.setItem("employee",(JSON.stringify(employee)))
    localStorage.setItem("admin",(JSON.stringify(admin)))

}

export const getLocalStorage=()=>{
   const employee =JSON.parse( localStorage.getItem("employee"))
   const admin =JSON.parse( localStorage.getItem("admin"))

   return{employee,admin}
   
}