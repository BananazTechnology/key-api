import { ApiKey } from './ApiKey'

// eslint-disable-next-line no-unused-vars
export class Queue<ApiKeyT> {
    private storage: ApiKey[] = [];

    enqueue (item: ApiKey): void {
      this.storage.push(item)
    }

    dequeue (): ApiKey | undefined {
      return this.storage.shift()
    }

    rotate (): ApiKey | undefined {
      const val = this.dequeue()
      val?.getKey()
      if (val) {
        this.enqueue(val)
      }
      return val
    }

    size (): number {
      return this.storage.length
    }
}
