/**
 * @author hiebj (Jonathan Hieb)
 * To see this QuckFilter demo in action, check out the Fiddle: https://fiddle.sencha.com/#fiddle/1b1
 */
Ext.onReady(function() {
	Ext.create('Ext.grid.Panel', {
        plugins: [ {
            ptype: 'quickfilter',
            emptyText: 'filter plants...'
        }, {
			ptype: 'cellediting',
			clicksToEdit: 1
		}],
		store: {
			autoLoad: true,
			fields: ['common', 'botanical', 'light', {
				name: 'availability',
				type: 'date',
				dateFormat: 'm/d/Y'
			}, {
				name: 'price',
				type: 'float'
			}],
			proxy: {
				type: 'ajax',
				url: 'plants.json',
				reader: 'json'
			},
			sorters: [{
				property: 'common',
				direction: 'ASC'
			}]
		},
		columns: [{
			text: 'Common Name',
			dataIndex: 'common',
			flex: 1,
			editor: {
				xtype: 'textfield'
			}
		}, {
			text: 'Botanical Name',
			dataIndex: 'botanical',
			flex: 1,
			editor: {
				xtype: 'textfield'
			}
		}, {
			text: 'Light',
			dataIndex: 'light',
			width: 130,
			editor: {
				xtype: 'combo',
				store: [
					['Shade', 'Shade'],
					['Mostly Shady', 'Mostly Shady'],
					['Sun or Shade', 'Sun or Shade'],
					['Mostly Sunny', 'Mostly Sunny'],
					['Sunny', 'Sunny']
				]
			}
		}, {
			xtype: 'numbercolumn',
			text: 'Price',
			dataIndex: 'price',
			width: 70,
			renderer: 'usMoney',
			editor: {
				xtype: 'numberfield'
			}
		}, {
			xtype: 'datecolumn',
			text: 'Available',
			dataIndex: 'availability',
			editor: {
				xtype: 'datefield',
				format: 'm/d/y'
			}
		}],
		renderTo: Ext.getBody(),
		width: 600,
		height: 300,
		title: 'Edit Plants?',
		frame: true,
		tbar: [{
			text: 'Add Plant',
			handler: function() {
				var grid = Ext.ComponentQuery.query('grid')[0];
				grid.getStore().insert(0, {
					light: 'Mostly Shady',
					availDate: Ext.Date.clearTime(new Date())
				});
				grid.editingPlugin.startEditByPosition({
					row: 0,
					column: 0
				});
			}
		}]
	});
});