import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { ScreenSizeService } from 'app/services/screen-size.service';
import { NavbarComponent } from 'app/components/navbar/navbar.component';


describe('NavbarComponent', () => {
  it('... should mount', () => {
    cy.mount(NavbarComponent, {
        imports: [ToastrModule.forRoot()],
        providers: [ScreenSizeService, ToastrService]
    })
  })

  describe('Mobile Navbar', () => {
    it('...should exist when on small screen', () => {
        cy.mount(NavbarComponent, {
            imports: [ToastrModule.forRoot()],
            providers: [ScreenSizeService, ToastrService]
        })
    
        cy.viewport('iphone-8')
        cy.get('[data-cy=mobileNavbar]').should('exist')
        cy.get('[data-cy=desktopNavbar]').should('not.exist')
      }) 

    it('...should default to collapsed', () => {
        cy.viewport('iphone-8')
        cy.mount(NavbarComponent, {
            imports: [ToastrModule.forRoot()],
            providers: [ScreenSizeService, ToastrService]
        }).then((wrapper) => {            
            cy.wrap(wrapper.component.isNavbarCollapsed).should('be.true')
        })
        cy.get('[data-cy=mobileNavbarContent]').should('not.exist')
    })

    it('...should uncollapse when menu button is pressed', () => {
        cy.viewport('iphone-8')
        cy.mount(NavbarComponent, {
            imports: [ToastrModule.forRoot(), BrowserAnimationsModule],
            providers: [ScreenSizeService, ToastrService]
        })

        cy.get('[data-cy=navbarCollapseBtn]').click()
        cy.get('[data-cy=mobileNavbarContent]').should('exist')
    })
  })

  describe('Desktop Navbar', () => {
    it('...should exist when on large screen', () => {
        cy.mount(NavbarComponent, {
            imports: [ToastrModule.forRoot()],
            providers: [ScreenSizeService, ToastrService]
        })
    
        cy.viewport(1920, 1080)
        cy.get('[data-cy=mobileNavbar]').should('not.exist')
        cy.get('[data-cy=desktopNavbar]').should('exist')
      })
  })

})