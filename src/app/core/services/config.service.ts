import { Injectable, signal } from '@angular/core';
import {
  RemoteConfig,
  getValue,
  fetchAndActivate,
} from '@angular/fire/remote-config';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private _canEditTasks = signal<boolean>(false);
  public canEditTasks = this._canEditTasks.asReadonly();

  constructor(private remoteConfig: RemoteConfig) {
    this.initializeConfig();
  }

  async initializeConfig() {
    try {
      await fetchAndActivate(this.remoteConfig);
      const val = getValue(this.remoteConfig, 'show_edit_button').asBoolean();
      this._canEditTasks.set(val); // Actualizamos la signal
    } catch (err) {
      console.error('Error cargando Remote Config', err);
    }
  }
}
