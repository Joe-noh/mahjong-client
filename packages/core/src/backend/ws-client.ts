import Phoenix from 'phoenix'
import { decamelize } from '@ridi/object-case-converter'

export class WSClient {
  private url: string
  private authToken: string
  private socket: Phoenix.Socket
  private channel: Phoenix.Channel

  public constructor(opts: { baseUrl: string; authToken: string }) {
    this.url = opts.baseUrl.replace(/^http/, 'ws').replace(/\/$/, '') + '/socket'
    this.authToken = opts.authToken
  }

  public connect(): void {
    this.socket = new Phoenix.Socket(this.url, { params: decamelize({ authToken: this.authToken }) })
    this.socket.connect()
  }

  public join(topic: string): Promise<any> {
    this.channel = this.socket.channel(topic)

    return new Promise((resolve, reject): void => {
      this.channel
        .join()
        .receive('ok', resp => resolve(resp))
        .receive('error', resp => reject(resp))
    })
  }

  public leave(): Promise<void> {
    return new Promise((resolve, reject): void => {
      this.channel
        .leave()
        .receive('ok', () => resolve())
        .receive('error', () => reject())
    })
  }

  public push(event: string, params: object): void {
    this.channel.push(event, decamelize(params))
  }

  public on(event: string, callback: (a: any) => void): void {
    this.channel.on(event, callback)
  }
}
