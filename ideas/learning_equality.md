# Learning Equality — Project Ideas

**Source:** https://docs.google.com/document/d/e/2PACX-1vShAAywLDbBu5WH-Wv44rxetISCOQmHxBwxDw63Nt_OcpPVIZW2jjT8sd_GLTpeNvspze8W-_c9JUdl/pub
**Scraped:** 2026-02-20T11:48:56.925968

---

[Learning Equality](https://www.google.com/url?q=https://learningequality.org/&sa=D&source=editors&ust=1771587966480202&usg=AOvVaw1EFFD0t0QIMispTQ2FVm59) is an education technology nonprofit that develops and maintains [Kolibri](https://www.google.com/url?q=https://learningequality.org/kolibri/&sa=D&source=editors&ust=1771587966480358&usg=AOvVaw0nY7qetn26pshduJqqfxxw), an adaptable set of open tools specially designed to support teaching and learning with tech but without the Internet for the third of the world that still lacks access to connectivity.

Kolibri is centered around an offline-first learning platform that runs on a variety of low-cost and legacy devices. It is complemented by a curricular tool, a library of open educational materials, and a toolkit of resources to support training and implementation. These tools are open and available in a variety of languages to better support learners and educators globally.

As a community-driven nonprofit, Learning Equality works closely to co-design Kolibri with a core network of collaborators, including national NGOs, UN agencies, government, and corporate partners. We also adopt a needs-based approach, constantly gathering insights from our community to inform the development of our tools.

Through its do-it-yourself adoption model and strategic collaborations, Learning Equality has reached approx. 13M learners and educators in every country in the world.

If you are interested in knowing more about our GSoC project ideas, Kolibri or Learning Equality, send us an email to [gsoc@learningequality.org](mailto:gsoc@learningequality.org), and we will invite you to join our #gsoc-2026 Slack channel! We hope to see you soon!

[Introduce user-generated UI themes in Kolibri to support accessibility and customization](https://docs.google.com#h.hfz6c4bl8ifv)

[Implement an accessible, prototype multi-select dropdown component](https://docs.google.com#h.y0fvx4cvg7jv)

[Update EPub rendering to a safely sandboxed viewer, using the maintained foliate-js library](https://docs.google.com#h.x1f7pytd3oan)

[Learner Facing QTI Interactions](https://docs.google.com#h.6nmc2npa81c8)

Implement automated accessibility testing on Kolibri

Enable device owners and learners to customize the visual theme of Kolibri through a UI, including predefined accessibility themes and individual adjustments for contrast, text size, and line spacing.

Kolibri supports theming through code-level customization using theme tokens defined in packages/kolibri/styles/internal/themeSpec.js, but there is no user interface for applying or customizing themes. This prevents device owners from branding Kolibri for their programs and prevents learners from adjusting visual settings for accessibility needs (high contrast, larger text, increased line spacing).

- Implement predefined themes (Default Kolibri, High Contrast, Dark Mode) and accessibility (Larger Text +125%, Increased Line Spacing +150%) with mutually exclusive and combinable color themes.
- Create theme settings UIs for device owners (device-wide) and learners (personal overrides), with preview functionality before applying changes.
- Extend database models and build backend API endpoints to store and retrieve theme preferences with proper permissions and hierarchy (device-wide as default, user-level overrides).
- Ensure theme changes apply reactively across all Kolibri plugins and pages, meeting WCAG 2.1 Level AA standards.

Device owners can set branded themes device-wide, and learners can customize accessibility settings for their personal needs, with changes saved per user and meeting WCAG 2.1 Level AA standards.

To be confirmed. Please check back on 2 March, 2026 for final updates.

- Full stack development (Vue.js/Javascript, Django)
- Web accessibility
- HTML/CSS

175 hours in 12 weeks

Medium

Replace all instances of Vuetify's VCombobox component in Studio with a custom, fully-accessible multi-select dropdown component built using Vue.js and aligned with Kolibri Design System patterns.

Kolibri Studio is migrating away from Vuetify to rely entirely on the Kolibri Design System and custom components. The Vuetify VCombobox component is currently used in multiple workflows within Studio, blocking completion of this migration. Current challenges include:

- Dependency on Vuetify 1.5.24 prevents full removal of the Vuetify library
- Two distinct use cases exist:

- Multi-select with predefined options only
- Multi-select with ability to create custom chips via text input

- Need to maintain feature parity while improving accessibility compliance
- Opportunity to establish reusable patterns for future Studio and KDS components

Technical

- Blocking the complete Vuetify migration in Studio
- Vuetify 1.x is outdated and no longer maintained
- Reduces bundle size and technical debt

Accessibility

- Opportunity to implement WCAG 2.1 Level AA compliance from the ground up
- Current Vuetify component may have accessibility gaps

- Custom multi-select component has feature parity with existing Vuetify VCombobox usage
- All existing Vuetify VCombobox instances are replaced with the new component
- Component meets WCAG 2.1 Level AA accessibility standards
- Component is documented and reusable for future needs
- No regressions in existing workflows

To be confirmed. Please check back on 2 March, 2026 for final updates.

- Vue.js
- HTML/CSS
- Web accessibility
- Javascript

175 hours in 12 weeks

Medium

The [EPub.js](https://www.google.com/url?q=http://epub.js&sa=D&source=editors&ust=1771587966487886&usg=AOvVaw03e8MiLjkG9c-i6QLjeEEv) library that we currently use to display EPubs has multiple extant bugs, and has resisted all attempts to upgrade in place. It also appears not to be actively maintained, and there appears to be no roadmap towards integrating important accessibility features such as the EPUB3 SMIL standard. By contrast, the foliate-js library is currently maintained, and has support for the EPUB3 SMIL standard.

- Research the foliate-js library to understand its compatibility with Kolibri’s browserlist configuration - are there any blockers to integration, or can all necessary JS features be polyfilled or ponyfilled?
- Understand the capabilities and architecture of the pluggable kolibri-sandbox that is used to render resources that can potentially execute arbitrary Javascript.
- Update the existing epub_viewer plugin in Kolibri to use a sandboxed integration of foliate-js.
- Retain all existing accessibility features and functionality, and update the UI where possible to bring it into line with broader platform norms and standards.

Overhaul the epub_viewer plugin to make it more accessible, secure, and maintainable, while retaining existing functionality, progress tracking, and eliminating as many extant bugs as possible.

To be confirmed. Please check back on 2 March, 2026 for final updates.

- HTML, Javascript, Vue.js
- Inclusive design principles, familiarity with WCAG specification

175 hours in 12 weeks

Medium

Kolibri's assessment capabilities have been limited by the Perseus framework's strong focus on Mathematics exercises, restricting non-Mathematics subjects from having robust assessments. Expanding QTI 3.0 rendering support will enable a broader range of assessment types across all subjects, with accessible, mobile-responsive, right-to-left friendly rendering that can be used interchangeably with Perseus files in exercises, practice quizzes, and coach-created quizzes.

- Implement rendering for priority QTI 3.0 interaction types: inline choice, matching, drag-and-drop, true/false, ordering, fill-in-the-blank.
- Ensure all interactions are accessible and meet WCAG 2.1 Level AA standards with proper keyboard navigation and screen reader support.
- Integrate with existing QTI viewer plugin and progress tracking functionality.
- Implement answer validation and scoring for each interaction type per QTI 3.0 specification.
- Test interactions across browsers and devices to ensure consistent behavior.

Learners can complete a wider range of QTI 3.0 question types within Kolibri, with accessible, consistent rendering across all supported interaction types and proper answer validation and scoring.

- HTML, JavaScript, Vue.js
- QTI 3.0 specification understanding
- Accessibility standards (WCAG, ARIA patterns) and accessibility testing

To be confirmed. Please check back on 2 March, 2026 for final updates.

175 hours in 14 weeks

Challenging

Creating editing experiences for Perseus question types has been limited to multiple choice and simple math answer input, with other question types lacking sufficiently robust editing tools for proper integration into Kolibri. Kolibri Studio currently lacks authoring tools for creating QTI 3.0 questions, requiring content creators to import pre-existing QTI packages. Enabling QTI editing in Studio is the first step toward allowing educators to create a broader range of assessment types for non-Mathematics subjects directly within the platform.

- Design and implement question authoring UI for priority QTI 3.0 interaction types: inline choice, matching, drag-and-drop, true/false, ordering, fill-in-the-blank (in addition to existing Multiple Choice and Text Entry).
- Build backend to generate valid QTI 3.0 XML from Studio-authored questions.
- Ensure created QTI packages are compatible with the Kolibri QTI viewer plugin.
- Support answer validation/scoring configuration for each interaction type.
- Follow Studio's existing content creation patterns and workflows.

Content creators can author priority QTI 3.0 question types directly in Kolibri Studio, generating valid QTI packages that render correctly in Kolibri's learner-facing viewer, without requiring external QTI authoring tools.

- Full-stack development (Vue.js, Django)
- QTI 3.0 specification and XML generation
- Form design and validation
- Understanding of Kolibri Studio content pipeline

To be confirmed. Please check back on 2 March, 2026 for final updates.

175 hours in 14 weeks

Challenging
