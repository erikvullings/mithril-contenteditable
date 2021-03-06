import m, { ComponentTypes, RouteDefs } from 'mithril';
import { Layout } from '../components/layout';
import { AboutPage } from '../components/about/about-page';
import { InputPage } from '../components/inputs/input-page';
import { HomePage } from '../components/home/home-page';
import { IDashboard } from '../models/dashboard';

export const enum Dashboards {
  HOME = 'HOME',
  CONTENTEDITABLE = 'INPUTS',
  ABOUT = 'ABOUT',
}

class DashboardService {
  private dashboards!: ReadonlyArray<IDashboard>;

  constructor(private layout: ComponentTypes, dashboards: IDashboard[]) {
    this.setList(dashboards);
  }

  public getList() {
    return this.dashboards;
  }

  public setList(list: IDashboard[]) {
    this.dashboards = Object.freeze(list);
  }

  public get defaultRoute() {
    const dashboard = this.dashboards.filter(d => d.default).shift();
    return dashboard ? dashboard.route : this.dashboards[0].route;
  }

  public switchTo(dashboardId: Dashboards, fragment = '') {
    const dashboard = this.dashboards.filter(d => d.id === dashboardId).shift();
    if (dashboard) {
      m.route.set(dashboard.route);
    }
  }

  public get routingTable() {
    return this.dashboards.reduce(
      (p, c) => {
        p[c.route] = { render: () => m(this.layout, m(c.component)) };
        return p;
      },
      {} as RouteDefs
    );
  }
}

export const dashboardSvc: DashboardService = new DashboardService(Layout, [
  {
    id: Dashboards.HOME,
    default: true,
    title: 'HOME',
    icon: 'home',
    route: '/home',
    visible: true,
    component: HomePage,
  },
  {
    id: Dashboards.CONTENTEDITABLE,
    title: 'EXAMPLE',
    icon: 'create',
    route: '/content-editable',
    visible: true,
    component: InputPage,
  },
  {
    id: Dashboards.ABOUT,
    title: 'ABOUT',
    icon: 'info',
    route: '/about',
    visible: true,
    component: AboutPage,
  },
]);
