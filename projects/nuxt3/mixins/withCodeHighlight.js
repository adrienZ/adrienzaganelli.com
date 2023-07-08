import Prism from 'prismjs'

// css theme
import 'prismjs/themes/prism-okaidia.css'

// plugin line number
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

// plugin treeview
import 'prismjs/plugins/treeview/prism-treeview'
import 'prismjs/plugins/treeview/prism-treeview.css'

// import 'prismjs/plugins/toolbar/prism-toolbar.js'
// import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js'
// import 'prismjs/plugins/autoloader/prism-autoloader.js'

export default {
	mounted() {
		// console.log(Object.keys(Prism.plugins));
		Prism.highlightAll()
	},
}
