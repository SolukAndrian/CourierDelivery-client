import { Component, OnInit } from '@angular/core';
import {CategoryDTO} from "../../../../dto/category/CategoryDTO";
import {Router} from "@angular/router";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  categoryName: string;

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
  }

  addCategory() {
    this.categoryService.addCategory(
      new CategoryDTO(this.categoryName))
      .subscribe(() => this.router.navigate(['/']));
  }
}
