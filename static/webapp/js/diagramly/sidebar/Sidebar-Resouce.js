(function()
{
	// 资源图库
	Sidebar.prototype.addRESOURCESPalette = function()
	{
		var d = 80;
		var dt = 'resource_library';
		var sb = this;
		var s = 'shape=image;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;imageAspect=1;aspect=fixed;image=img/lib/';

		// Adds resource_library shapes
		this.addRESOURCEKuPalette(d, dt, sb, s);
		
	};

	Sidebar.prototype.addRESOURCEKuPalette = function(d, dt, sb, s)
	{
		s += 'resource_library/';
		var gn = 'resource library';
		
		var fns = [
			 this.createVertexTemplateEntry(s + 'Application_Server_200.svg;',
					 d, d, '', 'Application Server', false, null, this.getTagsForStencil(gn, 'application server', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Balancing_200.svg;',
					 d, d, '', 'Balancing', false, null, this.getTagsForStencil(gn, 'balancing', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Base_Station_200.svg;',
					 d, d, '', 'Base Station', false, null, this.getTagsForStencil(gn, 'base station', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Cloud_200.svg;',
					 d, d, '', 'Cloud', false, null, this.getTagsForStencil(gn, 'cloud', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Cloud_Server_200.svg;',
					 d, d, '', 'Cloud Server', false, null, this.getTagsForStencil(gn, 'cloud server', dt).join(' ')),

			 this.createVertexTemplateEntry(s + 'Computer_200.svg;',
					 d, d, '', 'Computer', false, null, this.getTagsForStencil(gn, 'computer', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Data_base_200.svg;',
					 d, d, '', 'Data base', false, null, this.getTagsForStencil(gn, 'data base', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Data_Server_200.svg;',
					 d, d, '', 'Data Server', false, null, this.getTagsForStencil(gn, 'data server', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Desktop_Computer_200.svg;',
					 d, d, '', 'Desktop Computer', false, null, this.getTagsForStencil(gn, 'desktop computer', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Ffirewall_200.svg;',
					 d, d, '', 'Ffirewall', false, null, this.getTagsForStencil(gn, 'ffirewall', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Firewall_Fir_200.svg;',
					 d, d, '', 'Firewall Fir', false, null, this.getTagsForStencil(gn, 'firewall fir', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Gateway_cluster_200.svg;',
					 d, d, '', 'Gateway cluster', false, null, this.getTagsForStencil(gn, 'gateway cluster', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Host_Hardware_200.svg;',
					 d, d, '', 'Host Hardware', false, null, this.getTagsForStencil(gn, 'host hardware', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Interface_Server_200.svg;',
					 d, d, '', 'Interface Server', false, null, this.getTagsForStencil(gn, 'interface server', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Layer_3_Switch_200.svg;',
					 d, d, '', 'Layer 3 Switch', false, null, this.getTagsForStencil(gn, 'layer 3 switch', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Left_Arrow_200.svg;',
					 d, d, '', 'Left Arrow', false, null, this.getTagsForStencil(gn, 'left arrow', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Line_Router_200.svg;',
					 d, d, '', 'Line Router', false, null, this.getTagsForStencil(gn, 'line router', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Middleware_200.svg;',
					 d, d, '', 'Middleware', false, null, this.getTagsForStencil(gn, 'middleware', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Monitor_200.svg;',
					 d, d, '', 'Monitor', false, null, this.getTagsForStencil(gn, 'monitor', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Network_200.svg;',
					 d, d, '', 'Network', false, null, this.getTagsForStencil(gn, 'network', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Network_Server_200.svg;',
					 d, d, '', 'Network Server', false, null, this.getTagsForStencil(gn, 'network server', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Notebook_Computer_200.svg;',
					 d, d, '', 'Notebook Computer', false, null, this.getTagsForStencil(gn, 'notebook computer', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'On_Arrow_200.svg;',
					 d, d, '', 'On Arrow', false, null, this.getTagsForStencil(gn, 'on arrow', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Right_Arrow_200.svg;',
					 d, d, '', 'Right Arrow', false, null, this.getTagsForStencil(gn, 'right arrow', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Router_200.svg;',
					 d, d, '', 'Router', false, null, this.getTagsForStencil(gn, 'router', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Security_Server_200.svg;',
					 d, d, '', 'Security Server', false, null, this.getTagsForStencil(gn, 'security server', dt).join(' ')),

			 this.createVertexTemplateEntry(s + 'Select_Platform_200.svg;',
					 d, d, '', 'Select Platform', false, null, this.getTagsForStencil(gn, 'select platform', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Switch_200.svg;',
					 d, d, '', 'Switch', false, null, this.getTagsForStencil(gn, 'switch', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'The_server_200.svg;',
					 d, d, '', 'The Server', false, null, this.getTagsForStencil(gn, 'the server', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Topology_Firewall_200.svg;',
					 d, d, '', 'Topology Firewall', false, null, this.getTagsForStencil(gn, 'topology firewall', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Topology_Firewall_Red_200.svg;',
					 d, d, '', 'Topology Firewall Red', false, null, this.getTagsForStencil(gn, 'security server', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Topology_Server_200.svg;',
					 d, d, '', 'Topology Server', false, null, this.getTagsForStencil(gn, 'topology server', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Topology_Server_Group_200.svg;',
					 d, d, '', 'Topology Server Group', false, null, this.getTagsForStencil(gn, 'topology server group', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Under_Arrow_200.svg;',
					 d, d, '', 'Under Arrow', false, null, this.getTagsForStencil(gn, 'under arrow', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'User_200.svg;',
					 d, d, '', 'User', false, null, this.getTagsForStencil(gn, 'user', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'Wifi_200.svg;',
					 d, d, '', 'Wifi', false, null, this.getTagsForStencil(gn, 'wifi', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'yingjiaoxian.svg;',
					 d, d, '', 'Jie Kou', false, null, this.getTagsForStencil(gn, 'Yin Jiao Xian', dt).join(' ')),

			 this.createVertexTemplateEntry(s + 'yingjiaoxian_bg_200.svg;',
					 d, d, '', 'Jie Kou Bg', false, null, this.getTagsForStencil(gn, 'Jie Kou Bg', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'yingjiaoxian_duankou_200.svg;',
					 d, d, '', 'Jie Kou One', false, null, this.getTagsForStencil(gn, 'Jie Kou One', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'yingjiaoxian_duankou2_200.svg;',
					 d, d, '', 'Jie Kou Two', false, null, this.getTagsForStencil(gn, 'Jie Kou Two', dt).join(' ')),
			 this.createVertexTemplateEntry(s + 'yingjiaoxian_duankou3_200.svg;',
					 d, d, '', 'Jie Kou Three', false, null, this.getTagsForStencil(gn, 'Jie Kou Three', dt).join(' '))
			
		];

		this.addPalette('resourceLibrary', '资源图库', false, mxUtils.bind(this, function(content)
				{
					for (var i = 0; i < fns.length; i++)
					{
						content.appendChild(fns[i](content));
					}
		}));
   		
	};
	
	
})();
