import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatttingPage } from './chattting.page';

describe('ChatttingPage', () => {
  let component: ChatttingPage;
  let fixture: ComponentFixture<ChatttingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatttingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatttingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
