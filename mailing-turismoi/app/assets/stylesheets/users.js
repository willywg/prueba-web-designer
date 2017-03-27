import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'logo': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center',
    'backgroundColor': 'white',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'gray' }],
    'height': [{ 'unit': 'px', 'value': 50 }]
  },
  'logo img': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'title': {
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'form field': {
    'textAlign': 'center'
  },
  'form button': {
    'textAlign': 'center'
  },
  'mailing': {
    'fontFamily': 'Helvetica, sans-serif !important',
    'backgroundColor': '#F4F4F4'
  },
  'mailing table': {
    'maxWidth': [{ 'unit': 'px', 'value': 600 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'mailing table td img': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'mailing table image-head': {
    'backgroundSize': '100%'
  },
  'mailing table image-input': {
    'backgroundSize': '100%'
  },
  'mailing center-bold': {
    'textAlign': 'center',
    'maxWidth': [{ 'unit': 'px', 'value': 400 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'only screen&&<w420': {
      'fontSize': [{ 'unit': 'px', 'value': 16 }],
      'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
    },
    'only screen&&<w300': {
      'fontSize': [{ 'unit': 'px', 'value': 16 }]
    }
  },
  'mailing center': {
    'textAlign': 'center',
    'maxWidth': [{ 'unit': 'px', 'value': 400 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'only screen&&<w420': {
      'fontSize': [{ 'unit': 'px', 'value': 16 }],
      'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
    },
    'only screen&&<w300': {
      'fontSize': [{ 'unit': 'px', 'value': 16 }]
    }
  },
  'mailing center-bold': {
    'fontWeight': '700'
  },
  'mailing left': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }]
  }
});
