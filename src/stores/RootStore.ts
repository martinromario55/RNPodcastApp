import PlayerStore from './PlayerStore';
class RootStore {
  PlayerStore: PlayerStore;

  constructor() {
    this.PlayerStore = new PlayerStore(this);
  }
}

export const rootStore = new RootStore();

export default RootStore;
