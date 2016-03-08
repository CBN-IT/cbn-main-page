if (window.Cbn === undefined) {
	window.Cbn = {};
}
Cbn.leftMenuDrawer = {
	_showHideLeftMenu: function (event) {
		if (this.drawerOpened === "closed") {
			this.drawerOpened = "opened";
		} else {
			this.drawerOpened = "closed";
		}
		this._onShowHideLeftMenu();
	},
	_onShowHideLeftMenu: function () {
		var small = this.$.paperDrawerPanel.getAttribute("small-drawer-width");
		var large = this.$.paperDrawerPanel.getAttribute("large-drawer-width");
		if (this.drawerOpened === "closed") {
			this.$.paperDrawerPanel.drawerWidth = small;
			this.$.largeLogo.style.display = "none";
			this.$.smallLogo.style.display = "";
			this._resetLeftMenuScroll();
		} else {
			this.$.paperDrawerPanel.drawerWidth = large;
			this.$.largeLogo.style.display = "";
			this.$.smallLogo.style.display = "none";
			this._resetLeftMenuScroll();
		}
	},
	_showLeftMenuScroll: function () {
		var small = this.$.paperDrawerPanel.getAttribute("small-drawer-width");
		var large = this.$.paperDrawerPanel.getAttribute("large-drawer-width");
		if (this.drawerOpened === "closed") {
			this.$.leftMenuScroll.style.width = large;
			this.$.paperDrawerPanel.$.scrim.style.opacity = 1;
			this.$.paperDrawerPanel.$.scrim.style.visibility = "visible";
			this.$.paperDrawerPanel.$.scrim.style.zIndex = 1;
		}
	},
	_hideLeftMenuScroll: function () {
		var small = this.$.paperDrawerPanel.getAttribute("small-drawer-width");
		var large = this.$.paperDrawerPanel.getAttribute("large-drawer-width");
		if (this.drawerOpened === "closed") {
			this.$.leftMenuScroll.style.width = small;
			this.$.paperDrawerPanel.$.scrim.style.opacity = "";
			this.$.paperDrawerPanel.$.scrim.style.visibility = "";
			this.$.paperDrawerPanel.$.scrim.style.zIndex = 1;
		}
	},
	_resetLeftMenuScroll: function () {
		var small = this.$.paperDrawerPanel.getAttribute("small-drawer-width");
		var large = this.$.paperDrawerPanel.getAttribute("large-drawer-width");
		if (this.drawerOpened === "closed") {
			this.$.leftMenuScroll.style.width = small;
			this.$.paperDrawerPanel.$.scrim.style.opacity = "";
			this.$.paperDrawerPanel.$.scrim.style.visibility = "";
			this.$.paperDrawerPanel.$.scrim.style.zIndex = 1;
		} else {
			this.$.leftMenuScroll.style.width = large;
			this.$.paperDrawerPanel.$.scrim.style.opacity = "";
			this.$.paperDrawerPanel.$.scrim.style.visibility = "";
			this.$.paperDrawerPanel.$.scrim.style.zIndex = 1;
		}
	},
	initializeDrawerOpened: function () {
		this.drawerOpened = "opened";
		this._onShowHideLeftMenu();
	}
};


