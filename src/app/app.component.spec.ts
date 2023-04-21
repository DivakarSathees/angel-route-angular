import { ComponentFixture, TestBed, async, inject, TestBedStatic } from "@angular/core/testing";
import { Router } from "@angular/router";

import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { Location } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

describe("App Routing",() => {
    let router: Router;
    let fixture: ComponentFixture<AppComponent>;
    let location: Location

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(
                [
                  {path:'Home',component:HomeComponent},
                  {path:'Menu',component:MenuComponent},
                  {path:'Contact-us',component:ContactUsComponent},
                  
                  { path: '**', redirectTo: '/Home', pathMatch:'full' }
                ]),
            ],
            declarations:[
                AppComponent,
                HomeComponent,
                MenuComponent,ContactUsComponent
                
            ]

        }).compileComponents();
    }));

    beforeEach(() => {
        router=TestBed.get(Router);
        location = TestBed.get(Location);
        router.initialNavigation();
        fixture = TestBed.createComponent(AppComponent)
    });

    // it('should navigate to home page by default', waitForAsync(()=>{
    //     fixture.detectChanges();
    //     fixture.whenStable().then(() => {
    //         expect(location.path()).toBe('/')
    //     })
    // }))

    it('should navigate to home page by default', async () => {
      await router.initialNavigation();
      expect(location.path()).toBe('/Home');
    });



    it('should navigate to about page', async () => {
      await router.navigate(['/Menu']);
      expect(location.path()).toBe('/Menu');
    });

    it('should navigate to contact page', async () => {
      await router.navigate(['/Contact-us']);
      expect(location.path()).toBe('/Contact-us');
    });

    // it('should navigate to destination page', async () => {
    //   await router.navigate(['/destination']);
    //   expect(location.path()).toBe('/destination');
    // });

    it('should navigate to default path for invalid paths', async () => {
        await router.navigate(['/invalid']);
        fixture.detectChanges();
        expect(location.path()).toBe('/Home');
      });

})
