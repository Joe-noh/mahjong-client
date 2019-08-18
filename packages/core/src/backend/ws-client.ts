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

  public join(topic: string): void {
    this.channel = this.socket.channel(topic)
    this.channel.join()
  }

  public push(event: string, params: object): void {
    this.channel.push(event, decamelize(params))
  }
}
