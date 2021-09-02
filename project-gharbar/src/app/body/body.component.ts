import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {


  i: number = 0;
  btnInd: number = 0;

  arr = [
    { 'url': '/assets/check.svg', 'text': 'Lorem ipsum dolor sit amet.' },
    { 'url': '/assets/check.svg', 'text': 'Aliquam tincidunt mauris eu risus.' },
    { 'url': '/assets/check.svg', 'text': 'Morbi in sem quis dui placerat ornare, Pellentesque.' },
    { 'url': '/assets/check.svg', 'text': 'Nunc dignissim risus id metus.' },
    { 'url': '/assets/check.svg', 'text': 'Integer vitae libero ac risus egestas placerat.' },
    { 'url': '/assets/check.svg', 'text': 'Vivamus vestibulum ntulla nec ante.' },
    { 'url': '/assets/check.svg', 'text': 'Praesent placerat risus quis eros.' },
    { 'url': '/assets/check.svg', 'text': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' }
  ];

  arr2 = [
    { 'url': '/assets/Group 1306.svg', 'heading': 'Lorem ipsum dolor sit amet.', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { 'url': '/assets/Group 594.svg', 'heading': 'Lorem ipsum dolor sit amet.', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { 'url': '/assets/Group 1358.svg', 'heading': 'Lorem ipsum dolor sit amet.', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { 'url': '/assets/Group 674.svg', 'heading': 'Lorem ipsum dolor sit amet.', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { 'url': '/assets/Group 274.svg', 'heading': 'Lorem ipsum dolor sit amet.', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
    { 'url': '/assets/Group 672.svg', 'heading': 'Lorem ipsum dolor sit amet.', 'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
  ];

  arr3 = [
    { 'step': 'Step 5', 'url': '/assets/Group 1373.svg' },
    { 'step': 'Step 6', 'url': '/assets/question-mark.svg' },
    { 'step': 'Step 1', 'url': '/assets/chat (2).svg' },
    { 'step': 'Step 2', 'url': '/assets/share (1).svg' },
    { 'step': 'Step 3', 'url': '/assets/placeholder.svg' },
    { 'step': 'Step 4', 'url': '/assets/share.svg' }
  ];
  arr4 = [
    { 'url': '/assets/Mask Group 21.png', 'color': 'rgba(35, 206, 107, 1)' },
    { 'url': '/assets/Mask Group 20.png', 'color': 'rgba(8, 8, 61, 1)' },
    { 'url': '/assets/Mask Group 16.png', 'color': 'rgba(97, 132, 216, 1)' },
    { 'url': '/assets/Group 16.png', 'color': 'rgba(35, 206, 107, 1)' },
    { 'url': '/assets/Mask Group 16.png', 'color': 'rgba(97, 132, 216, 1)' },
  ];
  arr5 = [
    { 'url': '/assets/Group 380.png', 'text': 'Amazon Mall' },
    { 'url': '/assets/Group 741.png', 'text': 'Centaurus Mall' },
    { 'url': '/assets/Group 379.png', 'text': 'Giga Mall' },
  ];
  btn = [
    {'text': 'Lorem ipsum', 'color': 'rgba(97, 132, 216, 1)'},
    {'text': 'Lorem', 'color': 'rgba(77, 128, 251, 1)'},
    {'text': 'Lorem ipsum', 'color': 'rgba(232, 111, 58, 1)'},
  ]

  constructor() { }

  ngOnInit(): void {

  }

  onBtnChange()
  {
      this.btnInd > 2 ? this.btnInd = 0 : this.btnInd ++;
  }

  onNext() {
    this.i < 2 ? this.i++ : this.i = 0;
  }

  onPrevious() {
    this.i > 0 ? this.i-- : this.i = 2;
  }

}
