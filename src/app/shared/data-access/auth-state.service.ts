import { inject, Injectable } from "@angular/core";
import { StorageService } from "./storage.service";

  interface Session{
    access_token:string
  }


@Injectable({
  providedIn:'root',
})

export class AuthStateService{
  private _storageService = inject(StorageService)


  // obtener la sesion
  getSession():Session | null{
    let currentSession :Session | null = null
    currentSession= this._storageService.get<Session>('session')
    return currentSession
  }
}
