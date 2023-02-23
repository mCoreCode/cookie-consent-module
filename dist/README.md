# cookie-consent-module

## Install

### 1. Add `.npmrc` with `personal token` instead of `<auth_token>`

```text
@gc:registry=https://gitlab.geekcoders.cz/api/v4/packages/npm/
//gitlab.geekcoders.cz/api/v4/packages/npm/:_authToken= "<auth_token>"
//gitlab.geekcoders.cz/api/v4/projects/:_authToken=<auth_token>
```

### 2. Install package

#### a) Install using npm

```bash
npm install @gc/cookie-consent-module
```

#### b) Install using yarn

```bash
yarn add @gc/cookie-consent-module
```

## Change log

### Version 2.5.0

Added support for background gradient, now you can add them to buttons
```js
gradient: {
  value: 'linear-gradient(45deg,#efbda5,#c47a5d 50%,#955140 90%,#955140)'
}
```

Added support for custom family font via property `fontFamily`

You must include the font yourself

### Version 2.5.1

Added support for multiple font families for each button

#### Usage

```js
...
primaryButton: {
  fontFamily: 'Times',
  textColor: {
    default: '255, 255, 255',
    hover: '255, 255, 255',
  }
}
...
```

## Usage

### 1. Usage in React

```tsx
import ReactDOM from 'react-dom'
import React, { StrictMode } from 'react'
import 'cookie-consent-module/dist/index.css'
import { GCCookieConsent } from 'cookie-consent-module'

ReactDOM.render(
  <StrictMode>
    <GCCookieConsent localization={'cs'} usedCookiesType={['analytics', 'ad', 'personalization']} />
  </StrictMode>,
  document.getElementById('root')
)
```

### 2. Usage in webpack

```js
import { GCCookieConsentRender } from '@geekcoders/cookies-consent-module'
import '@geekcoders/cookies-consent-module/dist/index.css'

GCCookieConsentRender(
  {
    localization: 'cs',
    usedCookiesType: ['analytics', 'ad', 'personalization'],
  },
  document.getElementById('gc-cookie-consent')
)
```

### 3. Usage in HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <link href="path-to-package/dist/index.css" rel="stylesheet" type="text/css" />
    ...
  </head>
  <body>
    ...
    <script src="path-to-package/dist/index.umd.js" type="text/javascript"></script>
    <script>
      GCCookieConsent.init(
        {
          localization: 'cs',
          usedCookiesType: ['analytics', 'ad', 'personalization'],
        },
        document.getElementById('gc-cookie-consent')
      )
    </script>
    ...
  </body>
</html>
```

## Optional values

```html
...
<script>
  GCCookieConsent.init(
    {
      localization: 'cs',
      fontFamily: 'Zahrah',
      infoPanel: {
        textColor:  "255, 194, 14",
        backgroundColor:"255, 194, 14",
        link: {
          link: '/path-to-gdpr',
          textColor: '22, 163, 74',
        },
        primaryButton: {
          backgroundColor: {
            default: '22, 163, 74',
            hover: '21, 128, 61',
            gradient: {
              value: 'linear-gradient(45deg,#efbda5,#c47a5d 50%,#955140 90%,#955140)',
            },  
          },
          textColor: {
            default:'255, 255, 255'
            hover: '255, 255, 255'
          },
          borderColor: {
            default: "255, 194, 14",
            hover: "255, 194, 14"
          },
          ringColor: '34, 197, 94'
        },
        secondaryButton: {
          backgroundColor: {
            default: '229, 231, 235',
            hover: '209, 213, 219',
          },
          textColor: {
            default: '0, 0, 0',
            hover: '0, 0, 0',
          },
          borderColor: {
            default: "255, 194, 14",
            hover: "255, 194, 14"
          },
          ringColor:'107, 114, 128',
        },
      },
      settingsPanel: {
        textColor:  "255, 194, 14",
        backgroundColor:"255, 194, 14",
        link: {
          link: '/path-to-gdpr',
          textColor: '22, 163, 74',
        },
        primaryButton: {
          backgroundColor: {
            default: '22, 163, 74',
            hover: '21, 128, 61',
          },
          textColor: {
            default: '255, 255, 255'
            hover: '255, 255, 255'
          },
          borderColor: {
            default: "255, 194, 14",
            hover: "255, 194, 14"
          },
          ringColor: '34, 197, 94'
        },
        secondaryButton: {
          backgroundColor: {
            default: '229, 231, 235',
            hover: '209, 213, 219',
          },
          textColor: {
            default: '0, 0, 0',
            hover: '0, 0, 0',
          },
          borderColor: {
            default: "255, 194, 14",
            hover: "255, 194, 14"
          },
          ringColor:'107, 114, 128',
        },
      },
      checkbox: '22, 163, 74',
      trigger: {
        textColor: '156, 163, 175',
        backgroundColor: '243, 244, 246',
      },
    },
    document.getElementById('gc-cookie-consent')
  )
</script>
...
```

#### OR

```tsx
...
<GCCookieConsent
  localization={'cs'}
  usedCookiesType={['analytics', 'ad', 'personalization']}
  checkbox={'22, 163, 74'}
  fontFamily="Zahrah"
  trigger={{
    textColor: '156, 163, 175',
    backgroundColor: '243, 244, 246',
  }}
  infoPanel={{
    textColor: '255, 255, 255',
    backgroundColor: '50, 50, 50',
    link: {
      link: '/test',
      textColor: '22, 163, 74',
    },
    primaryButton: {
      textColor: {
        default: '255, 255, 255',
        hover: '255, 255, 255',
      },
      backgroundColor: {
        default: '22, 163, 74',
        hover: '21, 128, 61',
        gradient: {
          value: 'linear-gradient(45deg,#efbda5,#c47a5d 50%,#955140 90%,#955140)',
        },
      },
    },
    secondaryButton: {
      textColor: {
        default: '255, 255, 255',
        hover: '255, 255, 255',
      },
      backgroundColor: {
        default: 'transparent',
        hover: '40, 40, 40',
      },
      borderColor: {
        default: '255, 255, 255',
        hover: '255, 255, 255',
      },
    },
  }}
  settingsPanel={{
    textColor: '50, 50, 50',
    backgroundColor: '255, 255, 255',
    link: {
      link: '/test',
      textColor: '22, 163, 74',
    },
    primaryButton: {
      textColor: {
        default: '255, 255, 255',
        hover: '255, 255, 255',
      },
      backgroundColor: {
        default: '22, 163, 74',
        hover: '21, 128, 61',
      },
    },
    secondaryButton: {
      textColor: {
        default: '255, 255, 255',
        hover: '255, 255, 255',
      },
      backgroundColor: {
        default: '50, 50, 50',
        hover: '40, 40, 40',
      },
      borderColor: {
        default: '255, 255, 255',
        hover: '255, 255, 255',
      },
    },
  }}
  layout={'modal'}
/>
...
```
