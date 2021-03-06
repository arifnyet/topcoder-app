import 'babel-polyfill'

require('angular')
require('auth0-js')
require('auth0-angular')
require('angular-ui-router')
require('angular-cookies')
require('angular-storage')
require('angular-sanitize')
require('angular-messages')
require('angular-touch')
require('angular-jwt')
require('angular-filter')
require('angular-carousel')
require('angular-intro.js')
require('angular-img-fallback')
require('tc-angular-ellipsis')
require('lodash')
require('zepto/zepto.min.js')
require('restangular')
require('angucomplete-alt')
require('angularjs-toaster')
require('ng-dialog')
require('xml2js')

require('appirio-tech-ng-ui-components')
require('appirio-tech-ng-iso-constants')
require('appirio-tech-react-components')

// Vendor styles
require('../node_modules/angucomplete-alt/angucomplete-alt.css')
require('../node_modules/intro.js/introjs.css')
require('../node_modules/angularjs-toaster/toaster.css')
require('../node_modules/ng-dialog/css/ngDialog.css')
require('../node_modules/ng-dialog/css/ngDialog-theme-default.css')
require('../node_modules/angular-carousel/dist/angular-carousel.css')

require('../node_modules/font-awesome/fonts/fontawesome-webfont.eot')
require('../node_modules/font-awesome/fonts/fontawesome-webfont.svg')
require('../node_modules/font-awesome/fonts/fontawesome-webfont.ttf')
require('../node_modules/font-awesome/fonts/fontawesome-webfont.woff')
require('../node_modules/font-awesome/fonts/fontawesome-webfont.woff2')
require('../node_modules/font-awesome/css/font-awesome.css')

// Require non-npm scripts, e.g. kissmetrics, munchkin (analytics via jade are included in index.html)
requireContextFiles(require.context('../assets/scripts/', true, /^(.*\.(js$))[^.]*$/igm))

// Require Angular modules first
requireContextFiles(require.context('./', true, /^.*\.module\.js$/igm))

// Require JS files that aren't tests
requireContextFiles(require.context('./', true, /^(?:(?!\.spec\.js$).)*\.js$/igm))

// Some ordering is needed for right cascading of styles
// TODO: each module requires the CSS it needs and we delete this list
require('../assets/css/vendors/reactselect.scss')
require('../assets/css/vendors/introjs.scss')
require('../assets/css/vendors/angucomplete.scss')
require('../assets/css/topcoder.scss')
require('../assets/css/submissions/submit-file.scss')
require('../assets/css/submissions/submissions.scss')
require('../assets/css/skill-picker/skill-picker.scss')
require('../assets/css/sitemap/sitemap.scss')
require('../assets/css/settings/update-password.scss')
require('../assets/css/settings/settings.scss')
require('../assets/css/settings/preferences.scss')
require('../assets/css/settings/email.scss')
require('../assets/css/settings/edit-profile.scss')
require('../assets/css/settings/account-info.scss')
require('../assets/css/profile/subtrack.scss')
require('../assets/css/profile/nav.scss')
require('../assets/css/profile/icons.scss')
require('../assets/css/profile/header.scss')
require('../assets/css/profile/badges.scss')
require('../assets/css/profile/about.scss')
require('../assets/css/peer-review/reviewStatus.scss')
require('../assets/css/peer-review/readOnlyScorecard.scss')
require('../assets/css/peer-review/peer-review.scss')
require('../assets/css/peer-review/edit.scss')
require('../assets/css/peer-review/completed.scss')
require('../assets/css/my-srms/my-srms.scss')
require('../assets/css/my-dashboard/subtrack-stats.scss')
require('../assets/css/my-dashboard/srms.scss')
require('../assets/css/my-dashboard/programs.scss')
require('../assets/css/my-dashboard/my-dashboard.scss')
require('../assets/css/my-dashboard/my-challenges.scss')
require('../assets/css/my-dashboard/header-dashboard.scss')
require('../assets/css/my-dashboard/community-updates.scss')
require('../assets/css/my-challenges/my-challenges.scss')
require('../assets/css/layout/header.scss')
require('../assets/css/layout/footer.scss')
require('../assets/css/directives/track-toggle.scss')
require('../assets/css/directives/toggle-password-with-tips.scss')
require('../assets/css/directives/toggle-password.scss')
require('../assets/css/directives/tc-tabs.scss')
require('../assets/css/directives/tc-sticky.scss')
require('../assets/css/directives/tc-section.scss')
require('../assets/css/directives/tc-paginator.scss')
require('../assets/css/directives/tc-endless-paginator.scss')
require('../assets/css/directives/srm-tile.scss')
require('../assets/css/directives/skill-tile.scss')
require('../assets/css/directives/responsive-carousel.scss')
require('../assets/css/directives/progress-bar.directive.scss')
require('../assets/css/directives/profile-widget.scss')
require('../assets/css/directives/page-state-header.directive.scss')
require('../assets/css/directives/ios-card.scss')
require('../assets/css/directives/history-graph.scss')
require('../assets/css/directives/external-web-link.scss')
require('../assets/css/directives/external-link-deletion-confirm.scss')
require('../assets/css/directives/external-link-data.scss')
require('../assets/css/directives/external-account.scss')
require('../assets/css/directives/empty-state-placeholder.scss')
require('../assets/css/directives/distribution-graph.scss')
require('../assets/css/directives/dev-challenge-user-place.scss')
require('../assets/css/directives/design-lightbox.scss')
require('../assets/css/directives/design-challenge-user-place.scss')
require('../assets/css/directives/challenge-tile.scss')
require('../assets/css/directives/challenge-links.directive.scss')
require('../assets/css/directives/badge-tooltip.scss')
require('../assets/css/directives/tc-banner.scss')
require('../assets/css/directives/tc-fp-file-input.directive.scss')
require('../assets/css/community/statistics.scss')
require('../assets/css/community/members.scss')
require('../assets/css/community/community.scss')

function requireContextFiles(files) {
  const paths = files.keys()

  return paths.map((path) => {
    return files(path)
  })
}
