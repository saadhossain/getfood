import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  searchStr: string = '';
  handleSearch(val: string) {
    this.searchStr = val;
    this.router.navigate([], { queryParams: { search: this.searchStr } });
  }
  handleResetSearch() {
    this.searchStr = '';
    this.router.navigate([], { queryParams: {} });
  }
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      (data) => (this.searchStr = data['search'] || '')
    );
  }
}
