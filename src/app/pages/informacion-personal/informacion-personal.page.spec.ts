/**
 * Pruebas unitarias para el componente InformacionPersonalPage.
 * Se encarga de vigilar el correcto funcionamiento del componente.
 * del archivo de informacion-personal.page.ts.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionPersonalPage } from './informacion-personal.page';

describe('InformacionPersonalPage', () => {
  let component: InformacionPersonalPage;
  let fixture: ComponentFixture<InformacionPersonalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
