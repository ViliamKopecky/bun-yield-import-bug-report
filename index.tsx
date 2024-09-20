import { Text } from "@react-email/components"
import { render } from '@react-email/render'

const html = await render(<Text>Test</Text>)

console.log(html)
