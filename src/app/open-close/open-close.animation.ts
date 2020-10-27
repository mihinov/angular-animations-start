import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  stagger,
} from '@angular/animations';

export const itemAnimation = trigger('itemAnimation', [
  transition('* => *', [
    query(
      ':enter', style({ opacity: 0 }), { optional: true }
    ),
    query(
      ':enter', stagger('0.3s', [
        animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(50%)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        ])),
      ]), {optional: true}
    ),
  ]),
]);
