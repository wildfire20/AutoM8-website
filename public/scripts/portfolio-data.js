/*
 * AutoM8 portfolio data
 *
 * Add or update projects here rather than creating one-off card markup.
 * Supported URLs: liveUrl, demoUrl and caseStudyUrl. Buttons are only
 * rendered when the corresponding URL exists.
 */
window.autoM8Projects = [
    {
        name: 'Harmony Learning Institute — Custom School Management Platform',
        category: 'Education Technology',
        status: 'Live System',
        shortDescription: 'A custom-built digital school-management platform for Harmony Learning Institute, combining the public school website, online admissions, secure registration, parent portal, learner records, attendance, fees, document management, automated communication, Admin notifications and operational tools into one connected system.',
        features: [
            'Online admissions & registration',
            'Parent portal & learner records',
            'Fees, attendance & document management',
            'Automated school communication'
        ],
        image: null,
        icon: 'fa-graduation-cap',
        liveUrl: 'https://www.harmonylearning.co.za/',
        liveLabel: 'View Live System',
        demoUrl: null,
        caseStudyUrl: 'projects/harmony-learning-institute.html',
        featured: true,
        projectType: 'live'
    },
    {
        name: 'Stats Companies Booking, Rental & Ordering Platform',
        category: 'Booking & Business Platform',
        status: 'Client Project',
        shortDescription: 'A custom dynamic web platform developed for Stats Companies, combining customer bookings, rentals and ordering with account authentication and an administrative management dashboard.',
        features: [
            'Booking management',
            'Rental & ordering workflows',
            'Customer authentication',
            'Admin management dashboard'
        ],
        image: null,
        icon: 'fa-calendar-check',
        liveUrl: 'https://www.statscompanies.co.za/',
        liveLabel: 'Visit Live Platform',
        demoUrl: null,
        caseStudyUrl: 'projects/states-companies.html',
        featured: true,
        projectType: 'client'
    },
    {
        name: 'LPG Gas Stock Control',
        category: 'Fraud Prevention',
        status: 'Project Showcase',
        shortDescription: 'Custom stock-monitoring software designed to track real-time KG variance and surface discrepancies for energy retailers. Includes automated alerting and a full transaction audit trail.',
        features: [
            'Real-time KG variance tracking',
            'Stock discrepancy alerts',
            'Transaction audit trail',
            'Inventory monitoring'
        ],
        image: null,
        icon: 'fa-fire-alt',
        liveUrl: null,
        demoUrl: null,
        caseStudyUrl: null,
        featured: true,
        projectType: 'showcase'
    },
    {
        name: 'Lephalale Connect',
        category: 'Web Platform',
        status: 'Project Showcase',
        shortDescription: 'A local business directory designed for the Lephalale region, including business-owner dashboards, payment-processing workflows, and search and category filtering.',
        features: [
            'Local business directory',
            'Business-owner dashboard',
            'Payment-processing workflow',
            'Search and category filtering'
        ],
        image: null,
        icon: 'fa-map-marker-alt',
        liveUrl: null,
        demoUrl: null,
        caseStudyUrl: null,
        featured: false,
        projectType: 'showcase'
    },
    {
        name: 'TransLogix Fleet Tracker',
        category: 'Fleet Management',
        status: 'Project Showcase',
        shortDescription: 'Fleet management software designed to support vehicle monitoring, fuel tracking, maintenance scheduling, and driver-performance reporting.',
        features: [
            'Vehicle monitoring',
            'Fuel tracking',
            'Maintenance scheduling',
            'Driver-performance dashboard'
        ],
        image: null,
        icon: 'fa-truck',
        liveUrl: null,
        demoUrl: null,
        caseStudyUrl: null,
        featured: false,
        projectType: 'showcase'
    },
    {
        name: 'MedBook Appointments',
        category: 'Booking Platform',
        status: 'Project Showcase',
        shortDescription: 'An online appointment booking system designed to support patient scheduling, reminder workflows, pre-visit information forms, and schedule management for medical practices.',
        features: [
            'Online appointment booking',
            'Reminder workflow',
            'Patient-information forms',
            'Schedule management'
        ],
        image: null,
        icon: 'fa-calendar-check',
        liveUrl: null,
        demoUrl: null,
        caseStudyUrl: null,
        featured: false,
        projectType: 'showcase'
    },
    {
        name: 'FreshFarm Direct',
        category: 'E-Commerce',
        status: 'Project Showcase',
        shortDescription: 'An e-commerce concept designed to connect local farmers with consumers, including product subscriptions, delivery scheduling, and a supplier-management workflow.',
        features: [
            'E-commerce workflow',
            'Product subscriptions',
            'Delivery scheduling',
            'Supplier-management concept'
        ],
        image: null,
        icon: 'fa-shopping-cart',
        liveUrl: null,
        demoUrl: null,
        caseStudyUrl: null,
        featured: false,
        projectType: 'showcase'
    },
    {
        name: 'StaffSync HR System',
        category: 'HR Platform',
        status: 'Project Showcase',
        shortDescription: 'An HR management system designed to support employee onboarding, leave management, performance tracking, and a payroll-integration workflow concept.',
        features: [
            'Employee onboarding',
            'Leave management',
            'Performance tracking',
            'Payroll-integration concept'
        ],
        image: null,
        icon: 'fa-users-cog',
        liveUrl: null,
        demoUrl: null,
        caseStudyUrl: null,
        featured: false,
        projectType: 'showcase'
    },
    {
        name: 'ServiceBot AI Assistant',
        category: 'AI Solution',
        status: 'Project Showcase',
        shortDescription: 'An AI-assisted customer support system designed to handle frequently asked questions, route conversations, and demonstrate automated response workflows.',
        features: [
            'AI-assisted support',
            'Frequently asked questions',
            'Conversation routing',
            'Automated response workflow'
        ],
        image: null,
        icon: 'fa-robot',
        liveUrl: null,
        demoUrl: null,
        caseStudyUrl: null,
        featured: false,
        projectType: 'showcase'
    }
];

window.autoM8StatusClass = function(status) {
    const classes = {
        'Live System': 'badge-live',
        'Live Website': 'badge-live',
        'Client Project': 'badge-client',
        'Client Project — Pre-Launch': 'badge-client',
        'Internal System': 'badge-internal',
        'Academic Project': 'badge-academic',
        'Personal Project': 'badge-personal',
        'Prototype': 'badge-prototype',
        'Concept System': 'badge-concept'
    };
    return classes[status] || '';
};

window.autoM8ProjectLinks = function(project, basePath) {
    const prefix = basePath || '';
    const links = [];

    if (project.liveUrl) {
        links.push(
            '<a class="project-link project-link-primary" href="' + project.liveUrl + '" target="_blank" rel="noopener noreferrer" ' +
            'aria-label="' + (project.liveLabel || 'Visit live platform') + ' (opens in a new tab, leaving AutoM8)">' +
            (project.liveLabel || 'Visit live platform') + ' <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'
        );
    }
    if (project.demoUrl) {
        links.push(
            '<a class="project-link project-link-primary" href="' + project.demoUrl + '" target="_blank" rel="noopener noreferrer" ' +
            'aria-label="View Live Demo (opens in a new tab, leaving AutoM8)">View Live Demo ' +
            '<i class="fas fa-external-link-alt" aria-hidden="true"></i></a>'
        );
    }
    if (project.caseStudyUrl) {
        links.push(
            '<a class="project-link" href="' + prefix + project.caseStudyUrl + '">View Project Details ' +
            '<i class="fas fa-arrow-right" aria-hidden="true"></i></a>'
        );
    }

    return links.join('');
};