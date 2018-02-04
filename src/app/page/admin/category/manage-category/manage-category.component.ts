import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";
import {LinkCategoryDTO} from "../../../../dto/category/LinkCategoryDTO";
import {CategoryDTO} from "../../../../dto/category/CategoryDTO";


@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {
  public categories: LinkCategoryDTO[] = [];
  errorMessage: string;
  name: string;
  selectedCategory: LinkCategoryDTO;

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories)
    error => this.errorMessage = <any>error
  }

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(
      categoryId)
      .subscribe(() => this.router.navigate(['/']));
  }

  editCategory(categoryId: number) {
    this.categoryService.editCategory(
      categoryId, new CategoryDTO(this.selectedCategory.name))
      .subscribe(() => this.router.navigate(['/']));
  }

  onSelect(category: LinkCategoryDTO): void {
    this.selectedCategory = category;
  }
}
