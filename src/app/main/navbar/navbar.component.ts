import { Component, Input, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

/*import { navigation } from 'app/navigation/navigation';*/
import { navigation, navigationGeneral, navigationGeneralEmpre } from 'app/navigation/navigation';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { UserService } from 'app/ApiServices/UserService';
import { E_SessionUser } from 'app/Models/E_SessionUser';

@Component({
    selector: 'fuse-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseNavbarComponent implements OnDestroy {
    private fusePerfectScrollbar: FusePerfectScrollbarDirective;
    userInfo: E_SessionUser;
    NombreCliente: string;
    ValorVentas: number;

    @ViewChild(FusePerfectScrollbarDirective) set directive(theDirective: FusePerfectScrollbarDirective) {
        if (!theDirective) {
            return;
        }

        this.fusePerfectScrollbar = theDirective;

        this.navigationServiceWatcher =
            this.navigationService.onItemCollapseToggled.subscribe(() => {
                this.fusePerfectScrollbarUpdateTimeout = setTimeout(() => {
                    this.fusePerfectScrollbar.update();
                }, 310);
            });
    }

    @Input() layout;
    navigation: any;
    navigationServiceWatcher: Subscription;
    fusePerfectScrollbarUpdateTimeout;

    constructor(
        private sidebarService: FuseSidebarService,
        private navigationService: FuseNavigationService,
        private userService: UserService
    ) {


        this.navigation = navigation;

        const x = this.userService.GetCurrentCurrentUserNow();
        this.userInfo = x;
        this.NombreCliente = x.NombreUsuario;
        this.ValorVentas = 10000;
        if (x != null) {
            if (this.userService.GetCurrentCurrentUserNow().IdGrupo === '50') {
                this.navigation = navigationGeneralEmpre;
            } else {
                this.navigation = navigationGeneral;
            }
        } else {
            this.navigation = navigationGeneral;
        }



        // Default layout
        this.layout = 'vertical';
    }

    ngOnDestroy() {
        if (this.fusePerfectScrollbarUpdateTimeout) {
            clearTimeout(this.fusePerfectScrollbarUpdateTimeout);
        }

        if (this.navigationServiceWatcher) {
            this.navigationServiceWatcher.unsubscribe();
        }
    }

    toggleSidebarOpened(key) {
        this.sidebarService.getSidebar(key).toggleOpen();
    }

    toggleSidebarFolded(key) {
        this.sidebarService.getSidebar(key).toggleFold();
    }
}
