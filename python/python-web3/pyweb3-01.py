from env import env
from web3 import Web3, eth



def connect() -> Web3:
    '''Connects to the rpc ethereum node'''

    web3 = Web3(Web3.HTTPProvider(env.infura_url))

    return(web3)


def get_balances(web3: Web3) -> dict:
    '''Get ETH Balance'''

    wei_balance = web3.eth.getBalance(env.eth_wallet)
    eth_balance = web3.fromWei(wei_balance, 'ether')

    balances = {
        'wei' : wei_balance,
        'eth' : eth_balance
    }    

    return(balances)


def latest_block(web3: Web3) -> dict:
    '''Returns the latest block information'''

    return(web3.eth.get_block('latest'))


def run():
    '''Main run loop'''

    # Connect
    web3 = connect()
    print(f"Connected: {web3.isConnected()}")
    print(f"Block number: {web3.eth.blockNumber}")
    # Balances
    balances = get_balances(web3)
    print(f"ETH: {balances['eth']}")
    # Block info
    block = latest_block(web3)


if __name__ == "__main__":
    run()