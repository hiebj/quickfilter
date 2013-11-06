Ext.ux.grid.QuickFilter is a simple but powerful text filter plugin that docks to a grid and filters the visible columns.

For a live example, check out the Fiddle: https://fiddle.sencha.com/#fiddle/1b1

The QuickFilter is implemented as a single textfield with the Ext.AbstractPlugin mixin. When the contents of the field change, the plugin will filter the Grid's underlying store using a "word matching" strategy, comparing the words in the filter against the rendered content of the cells.

In short, a record passes the filter if each word of the filter is contained within at least one visible cell for that record.

The advantage to this is that the user will be filtering by what they see, no matter how the rendered view differs from the data in the Model instance. This is especially helpful when searching complex views with HTML-decorated text inside grid cells.

The word matching strategy is also wonderfully effective when a grid contains many text, number or date fields.

The plugin only works in ExtJS 4.2 because it uses Ext.table.View.renderRow(). This has two advantages: the plugin works perfectly with BufferedRenderer, and it is incredibly fast.