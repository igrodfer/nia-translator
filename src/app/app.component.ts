import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatInputModule, MatFormFieldModule, MatDividerModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nia-translator';
  niaText = ""

  onInputChange($event:any) {
    

    this.niaText = translateToNia($event.target.value)
  }


}

function ch_To_X (text: string): string {
  return text.replaceAll("ch","x")
}

function y_to_i (text: string): string {
  return text.replaceAll("y","i")
}
function ll_to_y ( text: string): string {
  return text.replaceAll("ll","y")
}
function remove_H (text:string): string {
  return text.replaceAll("h","")
}

function w_to_u (text: string) {
  return text.replaceAll("w","u")
}

function rr_to_R (text:string) {
  return text.replaceAll("rr","R")
}

function ca_co_cu_to_k (text:string): string{
  let replacer = (pair: string) => {
    return "k" + pair[1]
  }
  return text.replaceAll(/c+(a|o|u)/g,replacer)
}

function gi_ge_to_ji_je(text:string): string {
  let replacer = (pair: string) => {
    return "j" + pair[1]
  }
  return text.replaceAll(/g+(i|e)/g,replacer)
}
function gui_gue_to_gi_ge (text: string): string {
  let replacer = (trio: string) => {
    return "g"+trio[2]
  }
  return text.replaceAll(/gu+(e|i)/g,replacer)
}

function  translateToNia(input: string): string{
  input = input.toLowerCase()
  for( let f of [
    ch_To_X,
    remove_H,
    ca_co_cu_to_k,
    y_to_i,
    ll_to_y,
    rr_to_R,
    w_to_u,
    gi_ge_to_ji_je,
    gui_gue_to_gi_ge
  ]) {
    input = f(input)
  }
  return input
  
}