import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) return [];
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.toLowerCase().includes(searchText);
    });
  }
}
