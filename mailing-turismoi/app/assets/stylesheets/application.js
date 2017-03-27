import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, vendor/assets/stylesheets,
 * or any plugin's vendor/assets/stylesheets directory can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the bottom of the
 * compiled file so the styles you add here take precedence over styles defined in any other CSS/SCSS
 * files in this directory. Styles in this file should be added after the last require_* statement.
 * It is generally better to create a new file per style scope.
 *
 *= require_tree .
 *= require_self
  'html': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'fontFamily': ''Helvetica''
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'fontFamily': ''Helvetica''
  },
  'input': {
    'WebkitAppearance': 'none',
    'MozAppearance': 'none'
  },
  'input[type=text]': {
    'height': [{ 'unit': 'px', 'value': 30 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'borderRadius': '5px',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#09BECB' }]
  },
  'input[type=submit]': {
    'height': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'width': [{ 'unit': 'px', 'value': 80 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'backgroundColor': '#7EC434',
    'color': 'white',
    'borderRadius': '5px'
  },
  'input[type=submit]:hover': {
    'backgroundColor': '#449d44',
    'cursor': 'pointer'
  },
  'input[type=text]:focus': {
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '#09BECB' }],
    'height': [{ 'unit': 'px', 'value': 28 }],
    'outline': 'none'
  }
});
