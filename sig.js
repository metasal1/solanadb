const sig = {
    "blockTime": 1685660408,
    "meta": {
        "err": null,
        "fee": 165000,
        "innerInstructions": [
            {
                "index": 2,
                "instructions": [
                    {
                        "parsed": {
                            "info": {
                                "account": "HdeBTgivq3cHnsuxDKzWzEKcbpzKzzpzm4gsx5DTQwio",
                                "mint": "9nRTx2xM7EFkveqssYAJ7Mz7fu4KNgE3Y1wuGCkjMY1s",
                                "source": "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY",
                                "systemProgram": "11111111111111111111111111111111",
                                "tokenProgram": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                                "wallet": "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY"
                            },
                            "type": "create"
                        },
                        "program": "spl-associated-token-account",
                        "programId": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                    },
                    {
                        "parsed": {
                            "info": {
                                "extensionTypes": [
                                    "immutableOwner"
                                ],
                                "mint": "9nRTx2xM7EFkveqssYAJ7Mz7fu4KNgE3Y1wuGCkjMY1s"
                            },
                            "type": "getAccountDataSize"
                        },
                        "program": "spl-token",
                        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                    },
                    {
                        "parsed": {
                            "info": {
                                "lamports": 2039280,
                                "newAccount": "HdeBTgivq3cHnsuxDKzWzEKcbpzKzzpzm4gsx5DTQwio",
                                "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                                "source": "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY",
                                "space": 165
                            },
                            "type": "createAccount"
                        },
                        "program": "system",
                        "programId": "11111111111111111111111111111111"
                    },
                    {
                        "parsed": {
                            "info": {
                                "account": "HdeBTgivq3cHnsuxDKzWzEKcbpzKzzpzm4gsx5DTQwio"
                            },
                            "type": "initializeImmutableOwner"
                        },
                        "program": "spl-token",
                        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                    },
                    {
                        "parsed": {
                            "info": {
                                "account": "HdeBTgivq3cHnsuxDKzWzEKcbpzKzzpzm4gsx5DTQwio",
                                "mint": "9nRTx2xM7EFkveqssYAJ7Mz7fu4KNgE3Y1wuGCkjMY1s",
                                "owner": "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY"
                            },
                            "type": "initializeAccount3"
                        },
                        "program": "spl-token",
                        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                    },
                    {
                        "parsed": {
                            "info": {
                                "destination": "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
                                "lamports": 21000000,
                                "source": "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY"
                            },
                            "type": "transfer"
                        },
                        "program": "system",
                        "programId": "11111111111111111111111111111111"
                    },
                    {
                        "parsed": {
                            "info": {
                                "destination": "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
                                "lamports": 0,
                                "source": "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY"
                            },
                            "type": "transfer"
                        },
                        "program": "system",
                        "programId": "11111111111111111111111111111111"
                    },
                    {
                        "parsed": {
                            "info": {
                                "destination": "tenEpSp5GQM3Ko211Nrugvt7fk6cL7VUwAHmAY9rFNq",
                                "lamports": 8400000,
                                "source": "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY"
                            },
                            "type": "transfer"
                        },
                        "program": "system",
                        "programId": "11111111111111111111111111111111"
                    },
                    {
                        "parsed": {
                            "info": {
                                "amount": "1",
                                "authority": "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
                                "destination": "HdeBTgivq3cHnsuxDKzWzEKcbpzKzzpzm4gsx5DTQwio",
                                "source": "6E7FHVmFc6X3coZwPQ3jyW1YcssXRLCtfgaYUPC19pJQ"
                            },
                            "type": "transfer"
                        },
                        "program": "spl-token",
                        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                    },
                    {
                        "parsed": {
                            "info": {
                                "destination": "tenEpSp5GQM3Ko211Nrugvt7fk6cL7VUwAHmAY9rFNq",
                                "lamports": 2100000000,
                                "source": "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY"
                            },
                            "type": "transfer"
                        },
                        "program": "system",
                        "programId": "11111111111111111111111111111111"
                    },
                    {
                        "parsed": {
                            "info": {
                                "account": "6E7FHVmFc6X3coZwPQ3jyW1YcssXRLCtfgaYUPC19pJQ",
                                "destination": "tenEpSp5GQM3Ko211Nrugvt7fk6cL7VUwAHmAY9rFNq",
                                "owner": "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue"
                            },
                            "type": "closeAccount"
                        },
                        "program": "spl-token",
                        "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                    }
                ]
            }
        ],
        "logMessages": [
            "Program ComputeBudget111111111111111111111111111111 invoke [1]",
            "Program ComputeBudget111111111111111111111111111111 success",
            "Program ComputeBudget111111111111111111111111111111 invoke [1]",
            "Program ComputeBudget111111111111111111111111111111 success",
            "Program TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN invoke [1]",
            "Program log: Instruction: BuySingleListing",
            "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL invoke [2]",
            "Program log: Create",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
            "Program log: Instruction: GetAccountDataSize",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 1595 of 761623 compute units",
            "Program return: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA pQAAAAAAAAA=",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
            "Program 11111111111111111111111111111111 invoke [3]",
            "Program 11111111111111111111111111111111 success",
            "Program log: Initialize the associated token account",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
            "Program log: Instruction: InitializeImmutableOwner",
            "Program log: Please upgrade to SPL Token 2022 for immutable owner support",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 1405 of 755160 compute units",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
            "Program log: Instruction: InitializeAccount3",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4214 of 751278 compute units",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
            "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 21739 of 768520 compute units",
            "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success",
            "Program data: YtB4PF0gE7QAdSt9AAAAAMCbwAEAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
            "Program 11111111111111111111111111111111 invoke [2]",
            "Program 11111111111111111111111111111111 success",
            "Program 11111111111111111111111111111111 invoke [2]",
            "Program 11111111111111111111111111111111 success",
            "Program 11111111111111111111111111111111 invoke [2]",
            "Program 11111111111111111111111111111111 success",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
            "Program log: Instruction: Transfer",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 4645 of 689797 compute units",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
            "Program 11111111111111111111111111111111 invoke [2]",
            "Program 11111111111111111111111111111111 success",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
            "Program log: Instruction: CloseAccount",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3015 of 677101 compute units",
            "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
            "Program TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN consumed 130999 of 800000 compute units",
            "Program TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN success"
        ],
        "postBalances": [
            8268394372,
            1226639752859,
            0,
            443894238761,
            0,
            5616720,
            0,
            0,
            2039280,
            523442780391,
            1,
            1461600,
            731913600,
            1141440,
            1,
            2853600,
            1141440,
            0,
            1009200,
            934087680,
            1141440
        ],
        "postTokenBalances": [
            {
                "accountIndex": 8,
                "mint": "9nRTx2xM7EFkveqssYAJ7Mz7fu4KNgE3Y1wuGCkjMY1s",
                "owner": "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY",
                "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                "uiTokenAmount": {
                    "amount": "1",
                    "decimals": 0,
                    "uiAmount": 1,
                    "uiAmountString": "1"
                }
            }
        ],
        "preBalances": [
            10399998652,
            1226618752859,
            2039280,
            443894238761,
            1900080,
            5616720,
            0,
            0,
            0,
            521330441031,
            1,
            1461600,
            731913600,
            1141440,
            1,
            2853600,
            1141440,
            0,
            1009200,
            934087680,
            1141440
        ],
        "preTokenBalances": [
            {
                "accountIndex": 2,
                "mint": "9nRTx2xM7EFkveqssYAJ7Mz7fu4KNgE3Y1wuGCkjMY1s",
                "owner": "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
                "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                "uiTokenAmount": {
                    "amount": "1",
                    "decimals": 0,
                    "uiAmount": 1,
                    "uiAmountString": "1"
                }
            }
        ],
        "rewards": [],
        "status": {
            "Ok": null
        }
    },
    "slot": 197249954,
    "transaction": {
        "message": {
            "accountKeys": [
                {
                    "pubkey": "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY",
                    "signer": true,
                    "source": "transaction",
                    "writable": true
                },
                {
                    "pubkey": "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
                    "signer": false,
                    "source": "transaction",
                    "writable": true
                },
                {
                    "pubkey": "6E7FHVmFc6X3coZwPQ3jyW1YcssXRLCtfgaYUPC19pJQ",
                    "signer": false,
                    "source": "transaction",
                    "writable": true
                },
                {
                    "pubkey": "6VsH4ijXWNNTNxWwVkpVcVLrFaH6M86Rd8qYhnJrMtkm",
                    "signer": false,
                    "source": "transaction",
                    "writable": true
                },
                {
                    "pubkey": "7SVywCEQqKJXPoxMPM1N1SUV2bR4hk1y2KcGvkmcASvJ",
                    "signer": false,
                    "source": "transaction",
                    "writable": true
                },
                {
                    "pubkey": "BuQFQrUzTFkp12zLt9XdGvBGVLoZdDL1Te9KmzrLpDDW",
                    "signer": false,
                    "source": "transaction",
                    "writable": true
                },
                {
                    "pubkey": "DMuTUAMfrHCGVEBJWXAqtVZFwYG97Q3t9UjhwR2kET9A",
                    "signer": false,
                    "source": "transaction",
                    "writable": true
                },
                {
                    "pubkey": "Fx29tWNvo75ojdMmgVGxEbah8AWHHFiFJWSZDs8B1N1w",
                    "signer": false,
                    "source": "transaction",
                    "writable": true
                },
                {
                    "pubkey": "HdeBTgivq3cHnsuxDKzWzEKcbpzKzzpzm4gsx5DTQwio",
                    "signer": false,
                    "source": "transaction",
                    "writable": true
                },
                {
                    "pubkey": "tenEpSp5GQM3Ko211Nrugvt7fk6cL7VUwAHmAY9rFNq",
                    "signer": false,
                    "source": "transaction",
                    "writable": true
                },
                {
                    "pubkey": "11111111111111111111111111111111",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                },
                {
                    "pubkey": "9nRTx2xM7EFkveqssYAJ7Mz7fu4KNgE3Y1wuGCkjMY1s",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                },
                {
                    "pubkey": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                },
                {
                    "pubkey": "auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                },
                {
                    "pubkey": "ComputeBudget111111111111111111111111111111",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                },
                {
                    "pubkey": "J382BvVqPzZhYsmLwsD3WUzLXSnmqUZongPsVj9EyP66",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                },
                {
                    "pubkey": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                },
                {
                    "pubkey": "Sysvar1nstructions1111111111111111111111111",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                },
                {
                    "pubkey": "SysvarRent111111111111111111111111111111111",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                },
                {
                    "pubkey": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                },
                {
                    "pubkey": "TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN",
                    "signer": false,
                    "source": "transaction",
                    "writable": false
                }
            ],
            "addressTableLookups": null,
            "instructions": [
                {
                    "accounts": [],
                    "data": "E6NUis",
                    "programId": "ComputeBudget111111111111111111111111111111"
                },
                {
                    "accounts": [],
                    "data": "3QAwFKa3MJAs",
                    "programId": "ComputeBudget111111111111111111111111111111"
                },
                {
                    "accounts": [
                        "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
                        "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
                        "7SVywCEQqKJXPoxMPM1N1SUV2bR4hk1y2KcGvkmcASvJ",
                        "HdeBTgivq3cHnsuxDKzWzEKcbpzKzzpzm4gsx5DTQwio",
                        "9nRTx2xM7EFkveqssYAJ7Mz7fu4KNgE3Y1wuGCkjMY1s",
                        "BuQFQrUzTFkp12zLt9XdGvBGVLoZdDL1Te9KmzrLpDDW",
                        "6E7FHVmFc6X3coZwPQ3jyW1YcssXRLCtfgaYUPC19pJQ",
                        "tenEpSp5GQM3Ko211Nrugvt7fk6cL7VUwAHmAY9rFNq",
                        "9647kmH4FriCa1bWqEDBdBqRzrn4TfzFUVbbSe6jiYUY",
                        "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                        "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
                        "11111111111111111111111111111111",
                        "SysvarRent111111111111111111111111111111111",
                        "J382BvVqPzZhYsmLwsD3WUzLXSnmqUZongPsVj9EyP66",
                        "Fx29tWNvo75ojdMmgVGxEbah8AWHHFiFJWSZDs8B1N1w",
                        "DMuTUAMfrHCGVEBJWXAqtVZFwYG97Q3t9UjhwR2kET9A",
                        "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
                        "Sysvar1nstructions1111111111111111111111111",
                        "auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg",
                        "11111111111111111111111111111111",
                        "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
                        "6VsH4ijXWNNTNxWwVkpVcVLrFaH6M86Rd8qYhnJrMtkm"
                    ],
                    "data": "G7sDGxL4H9VZ1LbEUfYaGcVfA1Zy1",
                    "programId": "TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN"
                }
            ],
            "recentBlockhash": "2GTd6ZwD8JV2HijxswFTZfnBPXV327ezzf7YWVTP1u9u"
        },
        "signatures": [
            "3y4m6QGdiBcaYhMx32T4c3MfN6oyKq2F89zHKphtqvfPJoUJGYe7pBzTmdRujk8L84CnAvmvXReBW1VEs9AbNGkd"
        ]
    },
    "version": "legacy"
}

console.log(sig.meta.innerInstructions[0].instructions[0].parsed.info.mint)