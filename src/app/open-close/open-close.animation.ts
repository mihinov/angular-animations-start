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
      ':enter', stagger('0.5s', [
        animate('0.5s ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateY(50%)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ]), {optional: true}),
    query(':leave', stagger('0.5s', [
      animate('0.5s ease-in-out', keyframes([
        style({ opacity: 1, transform: 'translateY(0%)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateY(50%)', offset: 0.3 }),
        style({ opacity: 0, transform: 'translateY(100%)', offset: 1 })
      ]))
    ]), {optional: true}),
  ]),
]);

export const explainerAnim = trigger('explainerAnim', [
  transition('* => *', [
    query('.col', style({ opacity: 0, transform: 'translateX(-100%)' })),
    query('.col', stagger('500ms', [
      animate('0.8s 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ]))
  ])
]);
