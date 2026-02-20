# Learning Unlimited — Project Ideas

**Source:** https://docs.google.com/document/d/e/2PACX-1vQHE4OyXDdhDPkP2X7OWdSjauW_rQi1Fhr3RwEgTrSjDbrHO3nePDCdJkCheeocMrRTdqbHqnmb9WcG/pub
**Scraped:** 2026-02-20T11:48:56.939604

---

Learning Unlimited GSoC 2026

Ideas List

[Better Onsite Management for Admins 5](https://docs.google.com#h.uhbmsktcnw5)

The use of generative AI is permitted for most aspects of a pull request submission (e.g., software creation and review, generating documentation and tests).

Required disclosure: All new pull request submissions must include an AI usage disclosure section that clearly states whether generative AI tools were used. This disclosure must include:

- Tool identification: Specify which AI systems and versions were employed, noting exactly where they were applied (code, documentation, manuscript sections).
- Scope of assistance: Describe the nature of support provided—examples include code generation, refactoring assistance, and testing scaffolding.
- Human verification confirmation: Contributors must affirm that human team members thoroughly reviewed, modified, and validated all AI-generated content while making primary architectural and design decisions.

Prohibited AI interactions: Conversational use of AI between contributors and reviewers is restricted, except for translation support.

Author accountability: Submitting contributors bear complete responsibility for accuracy, originality, licensing compliance, and ethical/legal standards of submitted materials. Incomplete or inaccurate AI disclosures constitute ethical violations with consequences ranging from rejection to institutional notification.

Detailed description: Our website has automated testing via GitHub Actions and Codecov integration, but there is a lot of legacy code that lacks exhaustive testing. Furthermore, due to our small development team, often new features are implemented without the creation of new tests. This project involves systematically identifying untested code paths and creating unit tests to cover them. Some areas have already been identified (see issues listed below), while many other areas will need to be identified using our existing code coverage metrics.

Expected outcomes:

- Increased code coverage metrics
- Unit tests for all program modules and other website components
- Documentation of testing patterns for future contributors

Relevant skills/what you might learn:

- Python/Django testing frameworks (unittest, Django TestCase)
- Test design and code coverage analysis
- GitHub Actions CI/CD workflows
- Writing effective test fixtures and mocks
- Selenium or browser-based testing
- Reading and understanding a large Django codebase

Difficulty: Easy

Expected size: 175 hours

Possible mentors: Miles Calabresi, Will Gearty

Relevant GitHub issues:

[#3780 - Create more unit tests](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/3780&sa=D&source=editors&ust=1771588003776390&usg=AOvVaw0zLhyLkd0EIjPWkivk9sot)(parent issue)[#3773 - Add tests for Scheduling Checks Program Module](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/3773&sa=D&source=editors&ust=1771588003776578&usg=AOvVaw1E_-ru2a8zAbVN0bY03oMy)[#599 - Update dashboard tests for new JSON interface](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/599&sa=D&source=editors&ust=1771588003776715&usg=AOvVaw3zAU-RhvLuvpxdEcgyn9E9)[#794 - Tests for editclass/makeaclass view](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/794&sa=D&source=editors&ust=1771588003776842&usg=AOvVaw0WDeewTBLE9SWPgnUazQKh)[#1452 - Ajax autocomplete should have tests](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/1452&sa=D&source=editors&ust=1771588003776969&usg=AOvVaw3qON7Uh0VLNItyWaubYF35)[#933 - Automated tests for new TwoPhaseStudentReg](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/933&sa=D&source=editors&ust=1771588003777104&usg=AOvVaw0xloKLYpV0Tix3vO498p9k)[#3457 - Run ajax scheduler JS unit tests with other unit tests](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/3457&sa=D&source=editors&ust=1771588003777244&usg=AOvVaw1YwS1qeTpgs7ary-eGuUzb)[#3460 - Fix selenium tests](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/pull/3460&sa=D&source=editors&ust=1771588003777364&usg=AOvVaw17fC1QqbXTYyNPTY5bPVbJ)

Detailed description: Our website uses custom “modules” to control various registration features for users, but the current module management interface is confusing for administrators. Larger chapters often need to enable/disable different modules as they transition between registration phases (e.g., student lottery → class lottery → first-come-first-served). This project involves designing and implementing a new, user-friendly module management interface that allows admins to easily view, enable/disable, and schedule modules with opening/closing times.

Expected outcomes:

- New admin interface for managing program modules (separate views for student and teacher modules)
- Ability to enable/disable modules with visual feedback
- Support for module opening/closing times (start/expire dates)

Relevant skills/what you might learn:

- UI/UX design principles
- Frontend development (HTML/CSS/JavaScript)
- Django ORM and model design
- Django views and forms

Difficulty: Medium

Expected size: 175 hours

Possible mentors: Will Gearty

Relevant GitHub issues:

Detailed description: Our website’s theming system, which allows individual chapters to customize the look of their websites, is due for a major overhaul. The site currently uses Bootstrap 2.3.2, which is over a decade old—the current version is 5.3. Bootstrap is used minimally (primarily for buttons and minor elements), and there are existing issues with color contrast. This project involves upgrading Bootstrap to the latest version, expanding its use throughout the website for standardized styling, and implementing Bootswatch themes as default customization options. Bootswatch would provides cohesive color sets, fonts, and other stylings that administrators could select and then tweak appropriately to work for their chapters.

Expected outcomes:

- Upgraded Bootstrap from version 2.3.2 to 5.3
- Expanded Bootstrap integration across website elements (forms, navigation, cards, modals, etc.)
- Fixed color contrast issues
- Integration of Bootswatch theme library as selectable base theme settings
- Improved documentation for theme customization
- Improved mobile responsiveness through Bootstrap's modern grid system

Relevant skills/what you might learn:

- Frontend development (HTML/CSS/JavaScript)
- Bootstrap 5 components, utilities, and grid system
- LESS/SASS CSS preprocessing
- Responsive web design and accessibility
- UI/UX design principles

Difficulty: Hard

Expected size: 350 hours

Possible mentors: Katherine Brumberg, Will Gearty

Relevant GitHub issues:

[#3810 - Theming overhaul](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/3810&sa=D&source=editors&ust=1771588003780965&usg=AOvVaw2hp9Z2E6EgAi6dONH3WpG0)(parent issue)[#3809 - Upgrade bootstrap](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/3809&sa=D&source=editors&ust=1771588003781094&usg=AOvVaw2xn2opaMf0Mk3cyQJvZXET)[#3808 - Upgrade theme system to use bootswatch](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/3808&sa=D&source=editors&ust=1771588003781253&usg=AOvVaw3KbobEQJWS_8cwv-MVQ9ve)

Detailed description: The ESP Website uses various forms for student and teacher registration, but administrators currently face two key pain points. First, when viewing a form, there's no easy way to navigate to where that form can be configured. Second, adding custom fields to forms (like the teacher registration form) currently requires hardcoding form fields in Python, which is inaccessible to chapter administrators without developer support. This project aims to make form customization more intuitive and accessible by adding direct links from forms to their configuration pages and by creating an admin-friendly interface for adding custom form fields without code changes.

Expected outcomes:

- Banners/links on forms directing admins to configuration pages ("Want to edit this form? Click HERE")
- Field-by-field links showing where specific fields can be modified (stretch goal)
- Frontend interface for creating custom form fields without hardcoding
- Custom field data accessible in printables and exports

Relevant skills/what you might learn:

- Django forms and form customization
- Frontend development (HTML/CSS/JavaScript)
- Database schema design for dynamic fields
- Django template system
- UI/UX design for admin interfaces

Difficulty: Medium

Expected size: 175 hours

Possible mentors: William Gearty, Miles Calabresi

Relevant GitHub issues:

[#3690 - Links from Django forms to where they can be configured](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/3690&sa=D&source=editors&ust=1771588003783044&usg=AOvVaw34AVSXtcVlJdIrnQpagdLL)[#2707 - Make teacher reg custom fields more flexible and accessible](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/2707&sa=D&source=editors&ust=1771588003783198&usg=AOvVaw2hV6fuK5UfXdzvMsbuyLST)

Detailed description: During Splash and other events, administrators need real-time visibility and control over class registration and attendance. Currently, there's no dedicated mobile-friendly interface for admins to manage onsite operations. This project creates an admin onsite webapp that provides live monitoring of class enrollments and program check-ins (students and teachers), toggles to open/close registration for individual classes, and controls for overenrollment settings. The interface should stay up-to-date and be optimized for use on tablets and phones during the event.

Expected outcomes:

- Admin onsite webapp module with mobile-friendly interface
- Live/auto-refreshing view of all classes with enrollment progress bars (showing both enrollments and check-ins)
- Per-class toggle to open/close registration
- Quick access to overenrollment settings
- Mini class management page accessible by clicking through to individual classes
- Settings tab for general onsite configuration

Relevant skills/what you might learn:

- Django views and REST API development
- JavaScript/AJAX for real-time updates
- Mobile-responsive UI/UX development
- WebSocket or polling-based live updates
- Understanding event logistics and registration systems

Difficulty: Medium

Expected size: 175 hours

Possible mentors: William Gearty, Katherine Brumberg

Relevant GitHub issues:

Detailed description: The ESP Website's communications panel (comm panel) is how administrators send emails to students, teachers, and parents. While functional, it lacks modern email features that users expect from services like MailChimp. This project aims to enhance the comm panel with email templates that admins can select to pre-populate HTML-formatted emails, scheduled sending capabilities to queue emails for a specific date/time, and a teacher-facing comm panel so teachers can easily email students enrolled in their classes. These improvements will streamline communications workflows and bring the system up to par with modern email tools.

Expected outcomes:

- Template selection UI in comm panel with preview thumbnails
- Ability to create, edit, and manage reusable email templates
- Scheduled email sending with date/time picker
- Integration with SendGrid's scheduling API (or cron-based alternative)
- Teacher comm panel for emailing enrolled students
- UI to view and manage scheduled/pending emails
- Documentation for template creation and email scheduling

Relevant skills/what you might learn:

- Django views and forms
- HTML email design and templating
- Email delivery systems (SendGrid API)
- Cron jobs and scheduled task processing
- Frontend development (JavaScript for date/time pickers, template previews)
- UX design for communication tools
- Database design for storing templates and scheduled emails

Difficulty: Hard

Expected size: 350 hours

Possible mentors: Miles Calabresi, William Gearty

Relevant GitHub issues:

[#2885 - Comm panel template UI](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/2885&sa=D&source=editors&ust=1771588003787140&usg=AOvVaw1HWN9-mRZhYORKA8EbpsUF)[#3833 - Add comm panel for teachers to email students](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/3833&sa=D&source=editors&ust=1771588003787288&usg=AOvVaw1ev8aWgUnr1gigySASSrRA)[#3951 - Schedule emails to send at a particular time](https://www.google.com/url?q=https://github.com/learning-unlimited/ESP-Website/issues/3951&sa=D&source=editors&ust=1771588003787425&usg=AOvVaw0M8B9jltnCYArw4Cufdsn0)
