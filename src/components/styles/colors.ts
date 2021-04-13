import { createGlobalStyle } from 'styled-components'
import Colors from 'procredit-bank-design-system/modules/colors'

const { gray, red, blue, green, purple, orange, yellow } = Colors

// Exports all theme colors as css variables
// Use it inside css styles as var(--color-gray-1)
const CssColors = createGlobalStyle`
  :root {
    --color-gray-1: ${gray[1]};
    --color-gray-2: ${gray[2]};
    --color-gray-3: ${gray[3]};
    --color-gray-4: ${gray[4]};
    --color-gray-5: ${gray[5]};
    --color-gray-6: ${gray[6]};
    --color-gray-7: ${gray[7]};
    --color-gray-8: ${gray[8]};

    --color-red-1: ${red[1]};
    --color-red-2: ${red[2]};
    --color-red-3: ${red[3]};
    --color-red-4: ${red[4]};
    --color-red-5: ${red[5]};
    --color-red-6: ${red[6]};
    --color-red-7: ${red[7]};

    --color-blue-1: ${blue[1]};
    --color-blue-2: ${blue[2]};
    --color-blue-3: ${blue[3]};
    --color-blue-4: ${blue[4]};
    --color-blue-5: ${blue[5]};
    --color-blue-6: ${blue[6]};
    --color-blue-7: ${blue[7]};

    --color-green-1: ${green[1]};
    --color-green-2: ${green[2]};
    --color-green-3: ${green[3]};
    --color-green-4: ${green[4]};
    --color-green-5: ${green[5]};
    --color-green-6: ${green[6]};
    --color-green-7: ${green[7]};

    --color-purple-1: ${purple[1]};
    --color-purple-2: ${purple[2]};
    --color-purple-3: ${purple[3]};
    --color-purple-4: ${purple[4]};
    --color-purple-5: ${purple[5]};
    --color-purple-6: ${purple[6]};
    --color-purple-7: ${purple[7]};

    --color-orange-1: ${orange[1]};
    --color-orange-2: ${orange[2]};
    --color-orange-3: ${orange[3]};
    --color-orange-4: ${orange[4]};
    --color-orange-5: ${orange[5]};
    --color-orange-6: ${orange[6]};
    --color-orange-7: ${orange[7]};

    --color-yellow-1: ${yellow[1]};
    --color-yellow-2: ${yellow[2]};
    --color-yellow-3: ${yellow[3]};
    --color-yellow-4: ${yellow[4]};
    --color-yellow-5: ${yellow[5]};
    --color-yellow-6: ${yellow[6]};
    --color-yellow-7: ${yellow[7]};
  }
`

export default CssColors
