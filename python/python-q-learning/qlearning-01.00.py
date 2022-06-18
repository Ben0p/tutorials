import gym
import numpy as np
import random


env = gym.make("MountainCar-v0")
env.reset()

done = False
actions = [0, 1, 2]


while not done:
    for step in range(2000):
        action = random.choice(actions)
        new_state, reward, done, _ = env.step(action)
        env.render()

env.close()